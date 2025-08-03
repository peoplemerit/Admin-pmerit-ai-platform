# PMERIT AI Educational Platform - Environment Context

## 🎯 **Project Overview**
PMERIT AI Educational Platform - A fully operational Docker-containerized educational system designed to break poverty cycles through accessible education for underserved communities worldwide, with dual focus on Nigerian and US underserved populations as primary markets.

## 🌍 **Mission Statement**
Breaking poverty cycles through accessible education serving 3+ billion underserved people globally, starting with Nigerian and US populations.

---

## 📋 **Current Development Phase**
**Phase 1A: Employee Management System** (Active)
- Deploy pmerit-employee-api Cloudflare Worker
- Fix admin interface "Failed to load employees" issue  
- Test complete employee workflow
- Validate email system functionality

---

## 🏗️ **Critical Directory Structure**

### **PRIMARY WORKING DIRECTORIES**
```bash
~/pmerit-ai-platform/              # Main business logic engine
├── .copilot/
├── api/
│   ├── employee_api_cors.py       # Current operational API (port 9013)
│   ├── simple_working_main.py     # Alternative API implementation
│   └── twilio_email_service.py    # Email service integration
├── css/                           # Frontend stylesheets
├── js/                            # Frontend JavaScript
├── containers/                    # Container configurations
├── .env                           # Environment variables
├── docker-compose.yml             # Container orchestration
└── emails/                        # Email templates (3 files, 19KB total)
    ├── employee_invitation_template.html (8,134 bytes)
    ├── employee_welcome_template.html (2,836 bytes)
    └── test_invitation_2025-07-29_08-40-47.html (8,179 bytes)

~/pmerit-ai-platform-admin/        # Administrative interface  
├── admin/dashboard/               # Admin interface files
├── css/                           # Admin stylesheets
├── js/                            # Admin JavaScript
├── _headers                       # Cloudflare headers config
├── _redirects                     # Cloudflare redirects config
├── wrangler.toml                  # Cloudflare Workers config
└── index.html                     # Tier 1 Admin Portal

~/pmerit-ai-platform-docker/       # Container runtime environment
├── docker-compose.yml             # Main container orchestration (5,579 bytes)
├── dashboard.html                 # Local visual dashboard (13,844 bytes)
└── containers/                    # Individual container configs
    ├── pmerit-core/
    ├── pmerit-users/
    ├── pmerit-courses/
    ├── pmerit-virtual-human/
    ├── pmerit-assessments/
    ├── pmerit-ocr/
    ├── pmerit-ai-tutoring/
    ├── pmerit-career/
    ├── pmerit-payments/
    ├── pmerit-communication/
    └── pmerit-analytics/
```

### **ORGANIZED SUPPORT DIRECTORIES**
```bash
~/pmerit-organized/                # Comprehensive project organization (5.7GB)
├── pmerit-scripts/               # Development and management scripts
├── pmerit-reports/               # System reports and logs
├── pmerit-backups/               # Backup directories
│   └── backup-20250727-213237/   # Latest comprehensive backup
│       ├── container_images/     # All Docker images exported
│       └── configurations/       # System configurations
├── pmerit-archive/               # Archived development files
└── pmerit-consolidation-backup-20250726_182456/ # Historical backup

~/pmerit-ai-recovery/             # PMERIT AI system recovery
└── src/
    └── pmerit-ai-backend.js      # Core AI system implementation

~/pmerit-projects/                # MOSA project environment
├── pmerit-ai-platform/          # Business Logic Engine
├── pmerit-ai-platform-admin/    # Administrative Interface  
├── pmerit-ai-infrastructure/     # Infrastructure Management
├── pmerit-ai-backend/            # AI Intelligence Service
├── pmerit-ai-models/             # ML Model Development
├── deployment/                   # HP/Dell deployment configs
├── operations/                   # Monitoring, backup, migration
└── environments/                 # Dev/staging/production
```

### **ARCHIVED DEVELOPMENT FILES**
```bash
~/pmerit-archive/                 # Archived development files
~/frontend-assets/                # Organized frontend components (if separate)
```

---

## 🔐 **Critical Credentials & Authentication**

### **⚠️ TEMPORARY CREDENTIALS (Change After Project)**
```yaml
System Access:
  Username: pmerit-ai
  Password: gabriel_secure_2025 (⚠️ temporary - change after project)

Database:
  Host: localhost:15432
  Database: gabriel_ai (⚠️ legacy naming - migrate to pmerit_ai)
  Username: gabriel_user (⚠️ legacy naming - migrate to pmerit_user)
  Password: gabriel_secure_2025

Admin Access:
  Email: admin@pmerit.com
  Password: SuperAdmin123!
  Role: super_admin (TIER 1)

API Security:
  JWT Secret: pmerit_jwt_secret_2025_change_after_project
  Token Expiration: 24 hours
  Port: 9011

Email Configuration:
  Primary: onboard@pmerit-ai-platform.pages.dev
  Support: support@pmerit-ai-platform.pages.dev
  Provider: SendGrid/Gmail (awaiting phone verification)
```

---

## 🌐 **Network & Service Configuration**

### **PORT ALLOCATION**
```yaml
Container Services: 9000-9010 (PMERIT AI services)
  - pmerit-core: 9000
  - pmerit-users: 9001
  - pmerit-courses: 9002
  - pmerit-virtual-human: 9003
  - pmerit-assessments: 9004
  - pmerit-ocr: 9005
  - pmerit-ai-tutoring: 9006
  - pmerit-career: 9007
  - pmerit-payments: 9008
  - pmerit-communication: 9009
  - pmerit-analytics: 9010

Database Services:
  - PostgreSQL: 15432
  - Redis: 16379

Management Interfaces:
  - Visual Dashboard: 9904
  - Employee API: 9013
  - Admin API: 9011
```

### **LIVE PLATFORMS**
```yaml
Production Services:
  - Main Service: https://pmerit-ai-platform.pages.dev ✅
  - Admin Portal: https://pmerit-ai-platform-admin.pages.dev ✅
  - Local Dashboard: http://localhost:9904/dashboard.html (⚠️ needs configuration)

Cloudflare Workers (Active):
  - pmerit-ai-backend (0.3ms response time - 0% errors!)
  - pmerit-employee-api (KV namespace: EMPLOYEE_STORAGE)
  - pmerit-ai-platform (Production: k24258)
  - pmerit-ai-platform-portal (Production: 384e368)
  - pmerit-devbot-pmerit-ai (Active last 24hrs)
```

---

## 🛠️ **Technology Stack**

### **CORE INFRASTRUCTURE**
```yaml
Backend: FastAPI + Python
Database: PostgreSQL + Redis
Containerization: Docker + Docker Compose
Global CDN: Cloudflare Pages + Workers
Version Control: GitHub with auto-deployment
AI System: Rule-based expert system (5 domains)
```

### **CLOUDFLARE INTEGRATION**
```yaml
Workers: 7 active workers with excellent performance
KV Storage: EMPLOYEE_STORAGE (ID: fc8a957912394f1ab7585dd0373c534a)
Pages: Auto-deployment from GitHub repositories
Performance: 0.3ms response time, 0% error rate
Global Reach: 285+ locations worldwide
```

---

## 📊 **Current System Status**

### **✅ OPERATIONAL (100% Success Rate)**
```yaml
Container Infrastructure: 13/13 containers operational (6+ days uptime)
Database Systems: PostgreSQL + Redis responding perfectly
Global Platforms: All URLs returning HTTP 200
PMERIT AI System: Health, status, Q&A all functional
Network Resources: 17.5GB RAM, 4.2GB used, 5% disk usage
Repository Management: All git repos on main branch
Service Endpoints: All ports 9000-9010 active
Email System: Templates and API prepared
Build Scripts: _build.sh and develop.sh operational
Environment Config: .env with 801 bytes configuration
Backup System: 5.7GB comprehensive backup infrastructure
```

### **⚠️ CURRENT PRIORITIES (Phase 1A)**
```yaml
1. Deploy pmerit-employee-api Cloudflare Worker
2. Fix admin interface "Failed to load employees" issue
3. Test complete employee workflow: Add → Invite → Accept
4. Validate email template delivery system
5. Configure localhost:9904 dashboard access
```

---

## 🎯 **Development Context**

### **CURRENT PHASE: Phase 1A - Employee Management**
```yaml
Status: 🔧 ACTIVE CURRENT PHASE
Timeline: Week 1 of 1-2 week timeline
Focus: Complete admin functionality without changing naming conventions
Success Criteria: Admin can add employees, send invitations, zero breaking changes
```

### **GLOBAL MISSION ALIGNMENT**
```yaml
Target Communities: 3+ billion underserved people globally
Primary Markets: Nigeria (testing ground) + US underserved communities
Dual-Market Strategy: Rural areas, urban poor, veterans, displaced workers
Cultural Intelligence: Nigerian context + US workforce development
Mobile Optimization: Budget device compatibility, 3G optimization
```

### **COMPETITIVE ADVANTAGES**
```yaml
Cost Efficiency: $0 licensing vs $20K+/year commercial solutions
Performance: 0.3ms response time via Cloudflare edge
Privacy Control: Local processing, no API dependencies
Cultural Intelligence: Authentic Nigerian + US context
Educational Mission: Poverty-cycle-breaking focus vs generic AI
```

---

## 📋 **Quality Assurance & Success Metrics**

### **TECHNICAL PERFORMANCE TARGETS**
```yaml
Response Time: <100ms globally (currently achieving 0.3ms!)
Error Rate: 0% (currently maintaining excellent record)
Uptime: 99.9%+ (currently 6+ days continuous)
Email Delivery: >95% success rate
Admin Interface: <2 second load time
Database Performance: PostgreSQL + Redis stable
```

### **FUNCTIONAL SUCCESS CRITERIA**
```yaml
Phase 1A Completion:
- ✅ Employee API deployed and responding
- ✅ Admin interface successfully loads employees
- ✅ Complete workflow: Add → Invite → Accept functional
- ✅ Email templates delivered and working
- ✅ System maintains current performance levels
```

---

## 🔄 **Change Management**

### **NAMING CONVENTION TRANSITION**
```yaml
Current Strategy: Dual documentation approach
- Maintain Gabriel references for system stability
- Gradually transition to PMERIT naming in Phase 4
- Preserve operational functionality throughout transition
- Update documentation systematically without service disruption

Future Migration (Phase 4):
- gabriel-* containers → pmerit-* containers
- gabriel_ai database → pmerit_ai database  
- gabriel_user → pmerit_user credentials
- Update all configuration files systematically
```

### **RISK MANAGEMENT**
```yaml
Backup Strategy: Complete system backup before each phase
Rollback Procedures: Ability to revert to previous stable state
Testing Protocol: Validate each change before proceeding
Documentation: Maintain historical reference for troubleshooting
Performance Monitoring: Continuous system health validation
```

---

**Status**: Phase 1A (Employee Management) active development. Enterprise-grade educational platform infrastructure 100% operational, ready to complete admin functionality and advance toward global impact serving 3+ billion underserved learners.
