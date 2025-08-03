// PMERIT AI Employee Management API - Enhanced Version
// Fixes "undefined" display issues + adds status update functionality
// Deployment-ready for Cloudflare Workers

export default {
  async fetch(request, env, ctx) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Content-Type': 'application/json'
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 200, headers: corsHeaders });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    try {
      // Root endpoint
      if (path === '/') {
        return new Response(JSON.stringify({
          message: "PMERIT AI Employee Management API",
          status: "operational",
          version: "3.0 - Enhanced",
          endpoints: ["/api/health", "/api/employees", "/api/test-kv"],
          features: ["Complete CRUD", "Status Updates", "Role Management"]
        }), { status: 200, headers: corsHeaders });
      }

      // Health check
      if (path === '/api/health') {
        return new Response(JSON.stringify({
          status: "healthy",
          timestamp: new Date().toISOString(),
          kv_available: env.EMPLOYEE_STORAGE ? true : false,
          version: "3.0 - Enhanced"
        }), { status: 200, headers: corsHeaders });
      }

      // Test KV connection
      if (path === '/api/test-kv') {
        try {
          if (!env.EMPLOYEE_STORAGE) {
            return new Response(JSON.stringify({
              error: "KV binding not found",
              message: "EMPLOYEE_STORAGE binding is missing"
            }), { status: 500, headers: corsHeaders });
          }

          await env.EMPLOYEE_STORAGE.put('test', 'success');
          const result = await env.EMPLOYEE_STORAGE.get('test');
          await env.EMPLOYEE_STORAGE.delete('test');

          return new Response(JSON.stringify({
            kv_status: "working",
            test_result: result,
            message: "KV storage is operational"
          }), { status: 200, headers: corsHeaders });
        } catch (error) {
          return new Response(JSON.stringify({
            kv_status: "error",
            error: error.message
          }), { status: 500, headers: corsHeaders });
        }
      }

      // Get employees
      if (path === '/api/employees' && request.method === 'GET') {
        try {
          if (!env.EMPLOYEE_STORAGE) {
            return new Response(JSON.stringify({
              error: "KV storage not available"
            }), { status: 500, headers: corsHeaders });
          }

          let employeesData = await env.EMPLOYEE_STORAGE.get('employees');
          let employees = [];

          if (!employeesData) {
            // Create enhanced demo employees with all required fields
            employees = [
              {
                id: "emp_001",
                fullName: "Dr. Sarah Johnson",
                name: "Dr. Sarah Johnson", // For compatibility
                email: "sarah.johnson@pmerit.com",
                department: "Research & Development",
                role: "Lead Educational Researcher",
                specialization: "Educational Technology",
                status: "ACTIVE",
                date_invited: "2025-07-20T10:00:00Z",
                date_accepted: "2025-07-21T09:30:00Z",
                invited_by: "Super Admin"
              },
              {
                id: "emp_002",
                fullName: "Michael Chen",
                name: "Michael Chen",
                email: "michael.chen@pmerit.com",
                department: "Engineering", 
                role: "Senior Developer",
                specialization: "Software Development",
                status: "ACTIVE",
                date_invited: "2025-07-21T09:15:00Z",
                date_accepted: "2025-07-22T14:20:00Z",
                invited_by: "Super Admin"
              },
              {
                id: "emp_003",
                fullName: "Amina Okafor",
                name: "Amina Okafor",
                email: "amina.okafor@pmerit.com",
                department: "Education",
                role: "Cultural Education Specialist",
                specialization: "Nigerian Cultural Education",
                status: "ACTIVE",
                date_invited: "2025-07-22T11:30:00Z",
                date_accepted: "2025-07-23T16:45:00Z",
                invited_by: "Super Admin"
              },
              {
                id: "emp_004",
                fullName: "David Rodriguez",
                name: "David Rodriguez",
                email: "david.rodriguez@pmerit.com",
                department: "Operations",
                role: "Outreach Coordinator", 
                specialization: "Rural Education Outreach",
                status: "PENDING",
                date_invited: "2025-07-28T08:45:00Z",
                invited_by: "Super Admin"
              },
              {
                id: "emp_005",
                fullName: "Fatima Al-Hassan",
                name: "Fatima Al-Hassan",
                email: "fatima.alhassan@pmerit.com",
                department: "Engineering",
                role: "Mobile Platform Developer",
                specialization: "Mobile Learning Platforms",
                status: "PENDING",
                date_invited: "2025-07-29T13:20:00Z",
                invited_by: "Super Admin"
              }
            ];
            
            await env.EMPLOYEE_STORAGE.put('employees', JSON.stringify(employees));
          } else {
            employees = JSON.parse(employeesData);
          }

          return new Response(JSON.stringify({
            success: true,
            employees: employees,
            count: employees.length,
            storage: "Cloudflare KV"
          }), { status: 200, headers: corsHeaders });

        } catch (error) {
          return new Response(JSON.stringify({
            success: false,
            error: "Failed to get employees",
            message: error.message
          }), { status: 500, headers: corsHeaders });
        }
      }

      // Add employee - Enhanced with all required fields
      if (path === '/api/employees' && request.method === 'POST') {
        try {
          if (!env.EMPLOYEE_STORAGE) {
            return new Response(JSON.stringify({
              success: false,
              error: "KV storage not available"
            }), { status: 500, headers: corsHeaders });
          }

          const newEmployee = await request.json();
          
          // Validate required fields
          if (!newEmployee.fullName || !newEmployee.email || !newEmployee.department || !newEmployee.role) {
            return new Response(JSON.stringify({
              success: false,
              error: "Missing required fields",
              required: ["fullName", "email", "department", "role"]
            }), { status: 400, headers: corsHeaders });
          }
          
          let employeesData = await env.EMPLOYEE_STORAGE.get('employees');
          let employees = employeesData ? JSON.parse(employeesData) : [];
          
          // Check for duplicate email
          if (employees.some(emp => emp.email === newEmployee.email)) {
            return new Response(JSON.stringify({
              success: false,
              error: "Employee with this email already exists"
            }), { status: 409, headers: corsHeaders });
          }
          
          const employee = {
            id: Date.now().toString(),
            fullName: newEmployee.fullName,
            name: newEmployee.fullName, // For compatibility
            email: newEmployee.email,
            department: newEmployee.department,
            role: newEmployee.role,
            specialization: newEmployee.specialization || 'General',
            status: 'PENDING',
            date_invited: new Date().toISOString(),
            invited_by: 'Super Admin'
          };
          
          employees.push(employee);
          await env.EMPLOYEE_STORAGE.put('employees', JSON.stringify(employees));
          
          return new Response(JSON.stringify({
            success: true,
            message: "Employee added successfully",
            employee: employee
          }), { status: 201, headers: corsHeaders });

        } catch (error) {
          return new Response(JSON.stringify({
            success: false,
            error: "Failed to add employee",
            message: error.message
          }), { status: 500, headers: corsHeaders });
        }
      }

      // Update employee status (for invitation acceptance)
      if (path.match(/^\/api\/employees\/[^\/]+\/accept-invitation$/) && request.method === 'PUT') {
        try {
          if (!env.EMPLOYEE_STORAGE) {
            return new Response(JSON.stringify({
              success: false,
              error: "KV storage not available"
            }), { status: 500, headers: corsHeaders });
          }

          const employeeId = path.split('/')[3];
          
          let employeesData = await env.EMPLOYEE_STORAGE.get('employees');
          let employees = employeesData ? JSON.parse(employeesData) : [];
          
          const employeeIndex = employees.findIndex(emp => emp.id === employeeId);
          
          if (employeeIndex === -1) {
            return new Response(JSON.stringify({
              success: false,
              error: "Employee not found"
            }), { status: 404, headers: corsHeaders });
          }
          
          // Update employee status
          employees[employeeIndex].status = 'ACTIVE';
          employees[employeeIndex].date_accepted = new Date().toISOString();
          
          await env.EMPLOYEE_STORAGE.put('employees', JSON.stringify(employees));
          
          return new Response(JSON.stringify({
            success: true,
            message: "Employee invitation accepted successfully",
            employee: employees[employeeIndex]
          }), { status: 200, headers: corsHeaders });

        } catch (error) {
          return new Response(JSON.stringify({
            success: false,
            error: "Failed to accept invitation",
            message: error.message
          }), { status: 500, headers: corsHeaders });
        }
      }

      // Delete employee
      if (path.startsWith('/api/employees/') && request.method === 'DELETE') {
        try {
          if (!env.EMPLOYEE_STORAGE) {
            return new Response(JSON.stringify({
              success: false,
              error: "KV storage not available"
            }), { status: 500, headers: corsHeaders });
          }

          const employeeId = path.split('/')[3];
          
          let employeesData = await env.EMPLOYEE_STORAGE.get('employees');
          let employees = employeesData ? JSON.parse(employeesData) : [];
          
          const initialCount = employees.length;
          employees = employees.filter(emp => emp.id !== employeeId);
          
          if (employees.length === initialCount) {
            return new Response(JSON.stringify({
              success: false,
              error: "Employee not found"
            }), { status: 404, headers: corsHeaders });
          }
          
          await env.EMPLOYEE_STORAGE.put('employees', JSON.stringify(employees));
          
          return new Response(JSON.stringify({
            success: true,
            message: "Employee removed successfully",
            remaining_count: employees.length
          }), { status: 200, headers: corsHeaders });

        } catch (error) {
          return new Response(JSON.stringify({
            success: false,
            error: "Failed to delete employee",
            message: error.message
          }), { status: 500, headers: corsHeaders });
        }
      }

      return new Response(JSON.stringify({
        success: false,
        error: "Endpoint not found", 
        available_endpoints: ["/api/health", "/api/employees", "/api/test-kv"]
      }), { status: 404, headers: corsHeaders });

    } catch (error) {
      return new Response(JSON.stringify({
        success: false,
        error: "Server error",
        message: error.message
      }), { status: 500, headers: corsHeaders });
    }
  }
};
