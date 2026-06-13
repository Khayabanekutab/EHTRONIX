const serviceData = { 
  server:{title:'Server Deployment',sub:'Ubuntu · CentOS · Windows Server',items:['OS installation, partitioning, and initial hardening for Ubuntu, CentOS, and Windows Server','Role-based access control (RBAC), firewall rules, and SSH key management','Performance tuning: CPU governor, I/O scheduling, memory management','Automated monitoring agent deployment (Zabbix/Wazuh)','Full documentation and runbook for your team']}, 
  storage:{title:'Storage Solutions (SAN/NAS)',sub:'Enterprise Storage · Volume Management · Data Recovery',items:['SAN/NAS design and deployment for enterprise storage requirements','RAID configuration, volume management, and LUN allocation','iSCSI/NFS/SMB share setup and access control','Raw disk data file recovery and reconstruction','Performance benchmarking and capacity planning']}, 
  virt:{title:'Virtualization Environments',sub:'VMware ESXi · Hyper-V · Proxmox',items:['Hypervisor deployment and cluster configuration (vSphere, Proxmox, Hyper-V)','VM template creation, resource pools, and HA/DRS policies','vSAN or shared storage integration for high availability','Live migration testing and failover validation','Virtual network design: port groups, VLANs, distributed switches']}, 
  dc:{title:'Data Center Setup',sub:'Rack · Cabling · Environment · Patch Panels',items:['Physical rack layout design and structured cabling (Cat6A/Fiber)','Patch panel termination, cable labeling, and documentation','PDU installation, power redundancy, and UPS integration','Temperature/humidity monitoring and environmental alerting','Fire suppression coordination and access control systems']}, 
  siem:{title:'Security Monitoring (SIEM)',sub:'Wazuh · Zabbix · Real-Time Threat Detection',items:['Wazuh SIEM deployment for centralized log collection and correlation','Custom rule sets for your specific environment and compliance requirements','Host-based intrusion detection (HIDS) agent deployment','Integration with ticketing systems or Slack/Email alerts for critical threats','Log retention and rotation configuration for corporate audit readiness']}, 
  fw:{title:'Firewall Deployment',sub:'Fortinet · pfSense · Boundary Defense',items:['Hardware perimeter protection configuration and deployment','Granular access control lists (ACLs) and application control rules','Intrusion Prevention System (IPS/IDS) logic synchronization','Traffic shaping, bandwidth limit controls, and Multi-WAN failover','Secure web filtering and SSL inspection setup for internal subnets']}, 
  ep:{title:'Endpoint Protection',sub:'EDR Systems · MDM Configurations · Anti-Malware',items:['Managed endpoint security agent layout for corporate machines','Ransomware isolation mechanics and behavioural analysis loops','Mobile Device Management (MDM) integration for active remote policies','Removable media usage limits and local storage tracking configurations','Central update engine maps to conserve regional perimeter bandwidth']}, 
  va:{title:'Vulnerability Assessment',sub:'VAPT Scans · Compliance Hardening · Audit Maps',items:['Network footprint asset discovering maps using structured scanners','System patch level compliance analysis matrix checking updates','Port logic analysis, service scanning, and threat surface identification','Actionable mitigation summaries tailored for administrative engineering execution','Systematic compliance mapping referencing ISO 27001 tracking frames']}, 
  pacs:{title:'PACS Deployment',sub:'dcm4chee · J4Care · High-Availability Architecture',items:['Enterprise PACS server installation and configuration','DICOM worklist, study management, and viewer integration','Storage commitment and archive tier configuration','User role management for radiologists, technicians, and administrators','HL7 order integration with existing hospital workflows']}, 
  dicom:{title:'DICOM Routing & Archiving',sub:'Low-Latency · High-Availability · Heavy Medical Files',items:['DICOM router configuration for multi-modality environments (CT, MRI, X-Ray)','Automated routing rules based on modality, AE title, and study type','High-availability archive with redundant storage tiers','Compression and de-identification policies for storage optimization','Disaster recovery configuration with off-site DICOM archive replication']}, 
  ris:{title:'RIS/HIS Integration',sub:'Hospital Information Systems · Seamless Clinical Workflows',items:['HL7 v2.x / FHIR API integration between RIS, HIS, and PACS','Patient demographic synchronization and order management','Radiologist report dictation workflow integration','Billing and charge capture data flow configuration','End-to-end testing with clinical staff and formal UAT sign-off']}, 
  lan:{title:'LAN/WAN Design',sub:'Cisco · MikroTik · Layer-3 Routing · Subnetting',items:['Network topology design: core/distribution/access layer architecture','IP addressing scheme and VLAN segmentation design','Dynamic routing protocol configuration (OSPF, BGP for WAN)','Redundant uplink design with STP/RSTP or LACP bonding','Full network diagram documentation and IP management sheets']}, 
  wifi:{title:'Managed Wi-Fi',sub:'UniFi · Cisco · MikroTik · High-Density Deployment',items:['Site survey and RF planning for optimal AP placement','UniFi, Cisco Meraki, or MikroTik deployment and configuration','SSID design: corporate, guest, IoT segmentation','Seamless roaming (802.11r/k/v) for large campuses','Centralized management dashboard and usage analytics']}, 
  vpn:{title:'Secure VPN Fabrics',sub:'IPSec · OpenVPN · WireGuard · Remote Access',items:['Site-to-site IPSec VPN for multi-branch connectivity','Remote access VPN with MFA for home and field workers','Zero-trust network access (ZTNA) architecture advisory','Certificate-based authentication and PKI setup','Monitoring, logging, and automatic failover configuration']}, 
  solar:{title:'Solar EPC',sub:'On-Grid · Hybrid · Off-Grid Engineering Solutions',items:['Load profile calculation and structural alignment engineering calculations','Tier-1 solar module procurement and high-yield inverter selection maps','Inverter grid synchronization maps and array topology logic configurations','Overcurrent protection, array isolation boards, and structural earthing tracks','Live solar yield tracking portals configuration via secure monitoring nodes']}, 
  netmeter:{title:'Net Metering Consultancy',sub:'NEPRA · DISCO Approvals · Bidirectional Meters',items:['Complete NEPRA application file layout mapping verification','Utility grid alignment tests management with testing engineers execution','Bidirectional metrics installation monitoring and deployment checks','Interconnection agreement paperwork routing management for clients','Surplus billing credit flow auditing maps setup']}, 
  elec:{title:'Electrical Solutions',sub:'DB Panels · UPS · Generator Sync · Earthing',items:['Distribution board (DB) design, installation, and labeling','Generator ATS/AMF synchronization and load testing','Data center UPS sizing, bypass, and battery management','Power quality audit: harmonics, power factor correction','Earthing pit installation and lightning protection systems']}, 
  helpdesk:{title:'Helpdesk Support',sub:'L1/L2/L3 · SLA-Based · Remote & On-Site',items:['Tiered helpdesk (L1 remote, L2 on-site, L3 specialist escalation)','Defined SLA response and resolution times per ticket priority','ITSM ticketing system setup (Freshdesk, Jira Service Management)','HOD reporting: monthly incident summaries and trend analysis','User onboarding/offboarding workflows and account management']}, 
  asset:{title:'Asset Lifecycle Management',sub:'Snipe-IT · CMDB · License Tracking',items:['Full IT asset audit and inventory using Snipe-IT','Hardware lifecycle tracking: procurement to decommission','Software license validation and compliance management','QR/barcode asset tagging and check-in/check-out workflows','Monthly asset reports for finance and procurement teams']}, 
  backup:{title:'Cloud Backup & Disaster Recovery',sub:'Veeam · M365 · Google Workspace · RTO/RPO',items:['Microsoft 365 (Exchange, SharePoint, OneDrive) backup with Veeam','Google Workspace backup and point-in-time restore','On-premises to cloud backup tiering and retention policy design','Disaster recovery plan (DRP) documentation and testing','Monthly backup job reports and restore testing validation']}, 
  pm:{title:'Preventative Maintenance',sub:'Patch Management · OS Optimization · Firmware',items:['Monthly Windows/Linux patch cycle management via WSUS/Ansible','Firmware update scheduling for network devices (switches, firewalls)','Server OS optimization: disk cleanup, log rotation, database indexing','Hardware dust extraction and thermal paste replacement scheduling','Automated health check scripts and reporting validation']},
  web:{title:'Corporate Web Applications',sub:'Full-Stack · High-Performance Engineering Frameworks',items:['Custom corporate applications mapping process flows securely','Modular layout design using frameworks tracking data changes natively','Relational database structures sizing optimization queries parsing data arrays','API endpoint abstractions designing safe interfaces exchanging variables','Enterprise security layers implementation guarding database operations boards']},
  portal:{title:'Client & Vendor Portals',sub:'Secure Portals · API Nodes · Databases',items:['Secure client onboarding flows mapping variable parameters logic','Vendor asset submission records processing ledger tracks auditing','API synchronizations routing variable parameters tables instantly','Encrypted authorization layers protecting profile tokens arrays data','Admin metrics analytics dashboards checking transactional nodes histories']},
  train1:{title:'VMware & Linux Tracks',sub:'Infrastructure Engineers · virtualization Clusters Labs',items:['Hands-on production hypervisors setup tracking structural configuration arrays','Linux kernel configurations commands testing validation environment scenarios','Cluster resource pool variables scaling computations constraints controls','Virtual storage management techniques allocation maps provisioning blocks','Backup strategies virtualization layers snapshotting validation tools arrays']},
  train2:{title:'PACS Administration Workshop',sub:'Healthcare IT Teams · DICOM Routing · Archive Management',items:['DICOM data schema parameters logic checks validation labs','dcm4chee configuration arrays variables adjustments runtime tasks','Image compression formats parameters optimizations processing data files','PACS backup data arrays verification maps checking integrity loops','PACS server infrastructure disaster recovery drills labs simulation frameworks']},
  train3:{title:'Cybersecurity Awareness Training',sub:'All Staff Levels · Phishing · Password Hygiene · OPSEC',items:['Phishing simulation campaigns with detailed click-rate reporting','Password hygiene: policies, managers, and MFA adoption','Social engineering scenarios and recognition training','Acceptable use policy review and digital security fundamentals','Completion certificates and management dashboard reporting']}
};

function openModal(key){ 
  const d=serviceData[key]; 
  if(!d) return; 
  document.getElementById('modal-title').textContent=d.title; 
  document.getElementById('modal-sub').textContent=d.sub; 
  const ul=document.getElementById('modal-body'); 
  ul.innerHTML=d.items.map(e=>`<li>${e}</li>`).join(''); 
  document.getElementById('modal').classList.add('open'); 
  document.body.style.overflow='hidden'; 
}

function closeModal(){ 
  document.getElementById('modal').classList.remove('open'); 
  document.body.style.overflow=''; 
}

document.getElementById('modal').addEventListener('click',function(e){ 
  if(e.target===this) closeModal(); 
});

document.addEventListener('keydown',e=>{ 
  if(e.key==='Escape') closeModal(); 
});

function toggleMenu(){ 
  document.getElementById('mobileMenu').classList.toggle('open'); 
}

function closeMenu(){ 
  document.getElementById('mobileMenu').classList.remove('open'); 
}

const observer=new IntersectionObserver(entries=>{ 
  entries.forEach(e=>{ 
    if(e.isIntersecting) e.target.classList.add('visible'); 
  }); 
},{threshold:.1});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const sections=document.querySelectorAll('section[id]');
const navLinks=document.querySelectorAll('.nav-links a');

window.addEventListener('scroll',()=>{
  let cur='';
  sections.forEach(s=>{ 
    if(window.scrollY>=s.offsetTop-120) cur=s.id; 
  });
  navLinks.forEach(a=>{ 
    a.classList.remove('active'); 
    if(a.getAttribute('href')==='#'+cur) a.classList.add('active'); 
  });
});

function submitForm(){
  const n=document.getElementById('fname').value.trim();
  const e=document.getElementById('femail').value.trim();
  const s=document.getElementById('fservice').value;
  if(!n||!e||!s){ 
    alert('Please fill in Name, Email and Service.'); 
    return; 
  }
  const t=document.getElementById('toast');
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),4000);
  ['fname','femail','fphone','fservice','fmsg'].forEach(id=>{
    document.getElementById(id).value='';
  });
}