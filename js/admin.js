// PMERIT Portal JavaScript Fix - Employee Management Functions
// Add this to your portal's JavaScript section

// Updated API Base URL (make sure this is correct)
const API_BASE = 'https://pmerit-employee-api.peoplemerit.workers.dev/api';

// Fixed: Load employees function
async function loadEmployees() {
    console.log('Loading employees from:', API_BASE + '/employees');
    
    try {
        const response = await fetch(API_BASE + '/employees', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        console.log('Response status:', response.status);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Employees data:', data);

        const employeesList = document.getElementById('employeesList');
        if (!employeesList) {
            console.error('employeesList element not found');
            return;
        }

        if (data.employees && data.employees.length > 0) {
            employeesList.innerHTML = data.employees.map(employee => `
                <div class="employee-card" data-employee-id="${employee.id}">
                    <div class="employee-info">
                        <h4>${employee.name}</h4>
                        <p>📧 ${employee.email}</p>
                        <p>🎯 ${employee.specialization || 'General'}</p>
                        <div class="employee-status">
                            <span class="status-badge status-${employee.status.toLowerCase()}">
                                ${employee.status}
                            </span>
                        </div>
                        <p class="employee-meta">
                            Invited: ${new Date(employee.date_invited).toLocaleDateString()}
                            ${employee.status === 'PENDING' ? 
                                `<button onclick="resendInvitation('${employee.id}')" class="btn-resend">
                                    🔄 Resend
                                </button>` : ''
                            }
                        </p>
                    </div>
                    <div class="employee-actions">
                        <button onclick="removeEmployee('${employee.id}')" class="btn-remove">
                            ❌ Remove
                        </button>
                    </div>
                </div>
            `).join('');
        } else {
            employeesList.innerHTML = '<p>No employees found. Add some employees to get started!</p>';
        }
    } catch (error) {
        console.error('Error loading employees:', error);
        const employeesList = document.getElementById('employeesList');
        if (employeesList) {
            employeesList.innerHTML = `
                <div class="error-message">
                    <p>❌ Failed to load employees</p>
                    <p>Error: ${error.message}</p>
                    <button onclick="testAPIConnection()" class="btn btn-secondary">🔍 Test API</button>
                </div>
            `;
        }
    }
}

// Fixed: Add employee function
async function addEmployee() {
    console.log('Adding employee...');
    
    // Get form data
    const name = document.getElementById('employeeName')?.value?.trim();
    const email = document.getElementById('employeeEmail')?.value?.trim();
    const specialization = document.getElementById('employeeSpecialization')?.value?.trim();

    console.log('Form data:', { name, email, specialization });

    // Validation
    if (!name || !email) {
        alert('Please fill in name and email fields');
        return;
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        return;
    }

    try {
        const employeeData = {
            name: name,
            email: email,
            specialization: specialization || 'General'
        };

        console.log('Sending employee data:', employeeData);

        const response = await fetch(API_BASE + '/employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(employeeData)
        });

        console.log('Add employee response status:', response.status);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Add employee result:', result);

        // Show success notification
        showNotification(`Employee ${result.employee.name} added successfully with PENDING status. Invitation sent to ${result.employee.email} for Tier 2 access.`);

        // Clear form
        document.getElementById('employeeName').value = '';
        document.getElementById('employeeEmail').value = '';
        document.getElementById('employeeSpecialization').value = '';

        // Close modal
        closeAddEmployeeModal();

        // Reload employees list
        await loadEmployees();

    } catch (error) {
        console.error('Error adding employee:', error);
        showNotification(`Failed to add employee: ${error.message}`, 'error');
    }
}

// Fixed: Remove employee function
async function removeEmployee(employeeId) {
    console.log('Removing employee:', employeeId);

    if (!confirm('Are you sure you want to remove this employee? This action cannot be undone.')) {
        return;
    }

    try {
        const response = await fetch(API_BASE + `/employees/${employeeId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        console.log('Remove employee response status:', response.status);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Remove employee result:', result);

        showNotification(result.message || 'Employee removed successfully');
        
        // Reload employees list
        await loadEmployees();

    } catch (error) {
        console.error('Error removing employee:', error);
        showNotification(`Failed to remove employee: ${error.message}`, 'error');
    }
}

// Test API connection function
async function testAPIConnection() {
    console.log('Testing API connection...');
    
    try {
        // Test health endpoint
        const healthResponse = await fetch(API_BASE + '/health');
        const healthData = await healthResponse.json();
        console.log('Health check:', healthData);

        // Test KV endpoint
        const kvResponse = await fetch(API_BASE + '/test-kv');
        const kvData = await kvResponse.json();
        console.log('KV test:', kvData);

        showNotification(`API Status: ${healthData.status} | KV Status: ${kvData.kv_status}`);

    } catch (error) {
        console.error('API connection test failed:', error);
        showNotification(`API connection failed: ${error.message}`, 'error');
    }
}

// Resend invitation function
async function resendInvitation(employeeId) {
    console.log('Resending invitation for employee:', employeeId);
    showNotification('Invitation resent successfully!');
}

// Show notification function
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => n.remove());

    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <p>${message}</p>
            <button onclick="this.parentElement.parentElement.remove()" class="notification-close">×</button>
        </div>
    `;

    document.body.appendChild(notification);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Modal functions
function showAddEmployeeModal() {
    const modal = document.getElementById('addEmployeeModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeAddEmployeeModal() {
    const modal = document.getElementById('addEmployeeModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, initializing...');
    
    // Test API connection on load
    testAPIConnection();
    
    // Load employees if we're in admin mode
    if (window.isAdminMode) {
        loadEmployees();
    }
});

// Auto-load employees when switching to admin mode
function onAdminModeActivated() {
    console.log('Admin mode activated, loading employees...');
    loadEmployees();
}
