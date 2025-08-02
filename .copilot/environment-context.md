# Complete PMERIT AI Environment Context for GitHub Copilot

## 🖥️ HP Laptop Development Environment

### System Information
```yaml
Hostname: gabrielai-HP-Laptop-14-dk1xxx
OS: Ubuntu (Linux)
User: gabriel-ai
Home Directory: /home/gabriel-ai/
Architecture: x86_64
Purpose: Development and production host for PMERIT AI Educational Platform
```

### Critical Directory Structure
```bash
# PRIMARY WORKING DIRECTORIES
~/pmerit-ai-platform/                    # Main GitHub repository (service platform)
├── .copilot/                           # Copilot context files
├── api/                                # API implementation
│   ├── employee_api_cors.py           # Current operational API (Port 9013)
│   ├── simple_working_main.py         # Alternative API implementation
│   └── twilio_email_service.py        # Email service integration
├── css/                                # Frontend stylesheets
├── js/                                 # Frontend JavaScript
├── containers/                         # Container configurations
├── .env                               # Environment variables
└── docker-compose.yml                # Container orchestration

~/pmerit-ai-platform-portal/            # Portal GitHub repository
├── admin/dashboard/                    # Admin interface files
├── css/                               # Portal stylesheets
├── js/                                # Portal JavaScript
├── _headers                           # Cloudflare headers config
├── _redirects                         # Cloudflare redirects config
├── wrangler.toml                      # Cloudflare Workers config
└── index.html                         # Tier 1 Admin Portal

~/gabriel-ai-platform-docker/           # Container runtime environment
├── docker-compose.yml                # Main container orchestration
├── dashboard.html                     # Local visual dashboard
└── containers/                        # Individual container configs
    ├── gabriel-core/
    ├── gabriel-users/
    ├── gabriel-courses/
    └── [9 more container directories]

# ORGANIZED SUPPORT DIRECTORIES
~/gabriel-scripts/                      # Development and management scripts
~/gabriel-reports/                      # System reports and logs
~/gabriel-backups/                      # Backup directories
├── backup-20250727-213237/            # Latest comprehensive backup
├── container_images/                  # All Docker images exported
└── configurations/                    # System configuration backups

~/gabriel-archive/                      # Archived development files
~/frontend-assets/                     # Organized frontend components (if separate)
```

## 🔐 Critical Credentials & Authentication

### ⚠️ TEMPORARY CREDENTIALS (Rotate after project completion)

#### Database Credentials
```yaml
Host: localhost
Port: 15432                            # External mapping from container port 5432
Database: gabriel_ai
Username: gabriel_user
Password: gabriel_secure_2025          # ⚠️ TEMPORARY - Change after project
Connection String: postgresql://gabriel_user:gabriel_secure_2025@localhost:15432/gabriel_ai
Status: ✅ OPERATIONAL (27+ hours uptime)
```

#### Application Authentication
```yaml
Super Admin Login:
  Email: admin@pmerit.com
  Password: SuperAdmin123!             # ⚠️ TEMPORARY - Change after project  
  Role: super_admin
  Tier: 1 (TIER 1 - SUPER ADMIN)
  Status: ✅ WORKING PERFECTLY

Demo Access (Development):
  Email: demo@pmerit.com
  Name: Demo User
  Password: [Generated during registration]
  Access: Emergency demo login available
```

#### API Security Configuration
```yaml
JWT Secret: pmerit_jwt_secret_2025_change_after_project  # ⚠️ TEMPORARY
Algorithm: HS256
Token Expiration: 24 hours
API Port: 9013
Process: employee_api_cors.py
ngrok Tunnel: https://[dynamic].ngrok-free.app (when running locally)
Status: ✅ OPERATIONAL
```

#### Email System Configuration
```yaml
Provider: Twilio SendGrid
API Key: [ROTATED - New secure key active]
From Email: onboard@pmerit-ai-platform.pages.dev
Support Email: support@pmerit-ai-platform.pages.dev
Templates: Beautiful HTML templates in ~/pmerit-ai-platform/emails/
Status: ✅ OPERATIONAL (recently tested)
```

#### Redis Cache
```yaml
Host: localhost
Port: 16379                           # External mapping from container port 6379
Password: [None - local development]
Status: ✅ OPERATIONAL
```

## 🐳 Container Infrastructure Details

### Running Containers (13 Total - All Operational)
```yaml
gabriel-core:           Port 9000  | API Gateway + Cultural Intelligence
gabriel-users:          Port 9001  | User Management + Authentication  
gabriel-courses:        Port 9002  | Course Management + Curriculum
gabriel-virtual-human:  Port 9003  | 3D Avatar + Cultural TTS
gabriel-assessments:    Port 9004  | Assessment Engine + Validation
gabriel-ocr:           Port 9005  | OCR Processing + Mobile Optimization
gabriel-ai-tutoring:   Port 9006  | AI Tutoring + Cultural Context
gabriel-career:        Port 9007  | Career Assessment + Opportunities
gabriel-payments:      Port 9008  | Payment + Mobile Money Integration
gabriel-communication: Port 9009  | Multi-Language Communication
gabriel-analytics:     Port 9010  | Analytics + Performance Tracking
gabriel-db:           Port 15432 | PostgreSQL Database
gabriel-redis:        Port 16379 | Redis Cache
```

### Container Network Configuration
```yaml
Network: gabriel-lean_gabriel-network
Driver: bridge
Containers: All 13 containers connected
External Access: Ports 9000-9010 exposed to localhost
Status: ✅ All containers UP for 27+ hours
```

## 🌐 Deployment & Access Information

### Live Platform URLs
```yaml
Primary Platforms:
  Service: https://pmerit-ai-platform.pages.dev          ✅ OPERATIONAL
  Portal:  https://pmerit-ai-platform-portal.pages.dev   ✅ OPERATIONAL

Custom Domain (Old):
  Main: https://pmerit.com/pmerit-ai-platform/           ❌ MIME issues
  Portal: https://pmerit.com/pmerit-ai-platform-portal/  ❌ MIME issues

Local Development:
  Dashboard: http://localhost:9904/dashboard.html         ✅ ACCESSIBLE
  Portainer: http://localhost:9000                       ✅ ACCESSIBLE
  API Health: http://localhost:9013/health               ✅ OPERATIONAL
```

### GitHub Repository Information
```yaml
Service Repository:
  URL: https://github.com/peoplemerit/pmerit-ai-platform
  Branch: main
  Auto-Deploy: ✅ Cloudflare Pages integration active
  Last Deploy: 17 hours ago (successful)

Portal Repository:  
  URL: https://github.com/peoplemerit/pmerit-ai-platform-portal
  Branch: main
  Auto-Deploy: ✅ Cloudflare Pages integration active
  Last Deploy: 17 hours ago (successful)
```

## 🔧 Development Tools & Scripts

### Management Scripts
```bash
# Container management
~/gabriel-scripts/manage_running_containers.sh
├── status    # Check all container status
├── health    # Run health checks  
├── logs      # View container logs
└── urls      # Show all access URLs

# System diagnostics
~/gabriel-scripts/gabriel_system_test.sh          # Comprehensive testing
~/gabriel-scripts/gabriel_system_recovery.sh     # Container recovery
~/gabriel-scripts/cleanup_home.sh                # Home directory organization
```

### API Management
```bash
# Start current working API
cd ~/pmerit-ai-platform/api
python3 employee_api_cors.py 9013

# Test endpoints
curl http://localhost:9013/health                # Health check
curl http://localhost:9013/api/employees         # List employees
```

## 🧪 Environment Validation Requirements

### Critical Validation Points
1. **Database Connectivity**: PostgreSQL connection on port 15432
2. **Container Health**: All 13 containers responding 
3. **API Functionality**: Employee management endpoints working
4. **Email System**: Twilio SendGrid sending invitations
5. **Global Deployment**: Cloudflare Pages auto-deployment active
6. **Local Tools**: Dashboard and Portainer GUI accessible

### Security Validation
1. **Credential Rotation**: Verify all temporary passwords are documented
2. **API Security**: JWT token generation and validation working
3. **Database Security**: Connection encryption and user permissions
4. **Network Security**: Container network isolation functional

## 📊 Platform Status Summary

### Infrastructure Health (Current)
```yaml
Container Status: "13/13 containers operational (27+ hours uptime)"
Service Response: "11/11 services responding with HTTP 200"
Database Performance: "PostgreSQL + Redis stable, no connection issues"
Authentication: "Multi-tier system fully functional"
Email Integration: "Twilio SendGrid operational with beautiful templates"
Global Deployment: "Auto-deployment pipeline active and tested"
Backup System: "Complete disaster recovery ready"
```

### Development Readiness
```yaml
Code Quality: "FastAPI + AsyncPG production-ready codebase"
Container Architecture: "True MOSA microservices implementation"
Frontend Assets: "Mobile-optimized CSS/JS for global accessibility"
Documentation: "Comprehensive project documentation maintained"
Version Control: "Clean Git history with automated deployment"
```

## 🎯 Copilot Integration Focus Areas

### High-Impact Development Areas
1. **AI Tutoring Enhancement** (gabriel-ai-tutoring container)
2. **Cultural Intelligence Development** (cross-container feature)
3. **Mobile Optimization** (frontend + backend)
4. **Assessment Engine** (gabriel-assessments container)
5. **Multi-Language Support** (gabriel-communication container)

### Expected Copilot Contributions
- **Code Generation**: 10x faster development across all containers
- **Cultural Context**: Nigerian and US-specific educational content
- **AI Algorithms**: Advanced tutoring and assessment systems
- **Mobile Optimization**: Budget device and 3G network optimization
- **Database Optimization**: Queries optimized for global scale
