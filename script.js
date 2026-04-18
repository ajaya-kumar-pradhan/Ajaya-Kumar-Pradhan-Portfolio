// ═══════════════════════════════════════════
// LIQUID GLASS PORTFOLIO — Core Logic
// ═══════════════════════════════════════════

// ── Project Data ──
const projects = [
    {
        id: "healthcare",
        title: "HealthStats: Healthcare Analytics Dashboard",
        type: "Power BI Project",
        shortDesc: "Strategic health metrics and patient outcome monitoring (ClinicalOps360).",
        fullDesc: "Enterprise clinical intelligence dashboard monitoring patient throughput, occupancy rates, and financial KPIs like RevPAR and ADR. Features a Star Schema model with 40+ DAX measures and Row-Level Security (RLS) for data governance.",
        tech: ["Power BI", "DAX", "SQL Server", "Architecture"],
        image: "https://images.unsplash.com/photo-1576091160550-2173dad99a01?q=80&w=800&auto=format&fit=crop",
        pbiUrl: "https://app.powerbi.com/view?r=eyJrIjoiM2FkOGQ5OWYtNzgyMC00MDM1LTk4ZmUtMzA5NGFhYjk1OTk3IiwidCI6IjdlMzEwODQ1LTg0ZTEtNGRiOC1hZjk4LTcwNDA0MTkwZDhkZSJ9",
        mlUrl: null,
        github: "https://github.com/ajaya-kumar-pradhan/Healthcare-Analytics-Dashboard"
    },
    {
        id: "ecommerce",
        title: "Retail Ecommerce Analytics",
        type: "Power BI Project",
        shortDesc: "Global e-commerce performance monitoring with advanced DAX and segmentation.",
        fullDesc: "Enterprise-grade Power BI dashboard for global performance monitoring. Includes YTD/YoY growth tracking, customer segmentation, and geographic analysis with a fully interactive Star Schema.",
        tech: ["Power BI", "DAX", "SQL", "Excel"],
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
        pbiUrl: "https://app.powerbi.com/view?r=eyJrIjoiZDA0M2E1YWUtMGU2NC00NDk2LTg1MjUtOTRhNmM5MDk5OTEzIiwidCI6IjdlMzEwODQ1LTg0ZTEtNGRiOC1hZjk4LTcwNDA0MTkwZDhkZSJ9",
        mlUrl: null,
        github: "https://github.com/ajaya-kumar-pradhan/E-Commerce-Analytics-Intelligence-Dashboard"
    },
    {
        id: "loanguard",
        title: "LoanGuard: Credit Risk System",
        type: "Machine Learning + Power BI",
        shortDesc: "Enterprise credit risk evaluation integrating SQL BI and Random Forest modeling.",
        fullDesc: "A full-stack credit risk evaluation system combining SQL business intelligence with a Random Forest predictive model. Features a dual-pane Streamlit interface for real-time risk scoring and portfolio metrics.",
        tech: ["Power BI", "SQL", "Python", "Streamlit"],
        image: "assets/loan_guard_dashboard.png",
        pbiUrl: "https://app.powerbi.com/view?r=eyJrIjoiNGYzMTM1ZDItODQ3Mi00ZWVhLWE3MjQtOGYxYmZjOGRmZDYyIiwidCI6IjdlMzEwODQ1LTg0ZTEtNGRiOC1hZjk4LTcwNDA0MTkwZDhkZSJ9",
        mlUrl: "https://huggingface.co/spaces/ajayapradhanconnect/loan-default-predictor",
        github: "https://github.com/ajaya-kumar-pradhan/Credit-Risk-Assessment-Loan-Default-Prediction-System"
    },
    {
        id: "banking",
        title: "Banking Analytics Hub",
        type: "Power BI Project",
        shortDesc: "Financial analytics for loan portfolio risk, NPL tracking, and performance monitoring.",
        fullDesc: "Financial analytics solution focused on Non-Performing Loans (NPL), delinquency rates, and automated ETL pipelines. Features customer segmentation insights, loan portfolio analysis, and financial performance tracking with automated refresh.",
        tech: ["Power BI", "SQL Server", "ETL", "Analytics"],
        image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=800&auto=format&fit=crop",
        pbiUrl: "https://app.powerbi.com/view?r=eyJrIjoiOTQ5Y2UyY2UtNWM2NC00NDYyLTllNWUtYmU1ZDhkM2YwYzg5IiwidCI6IjdlMzEwODQ1LTg0ZTEtNGRiOC1hZjk4LTcwNDA0MTkwZDhkZSJ9",
        mlUrl: null,
        github: "https://github.com/ajaya-kumar-pradhan/Banking-Analytics-Dashboard"
    },
    {
        id: "churn",
        title: "Churn Prediction & Retention System",
        type: "Machine Learning",
        shortDesc: "End-to-end DS pipeline with XGBoost and automated retention strategies.",
        fullDesc: "Production-level ML system achieving 99%+ recall on customer churn. Integrates SHAP for model explainability and a rule-based engine that generates actionable retention strategies for high-risk segments.",
        tech: ["Python", "XGBoost", "SHAP", "Streamlit"],
        image: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?q=80&w=800&auto=format&fit=crop",
        pbiUrl: null,
        mlUrl: "https://huggingface.co/spaces/ajaya-kumar-pradhan/Churn-Prediction-System",
        github: "https://github.com/ajaya-kumar-pradhan/churn-prediction-system"
    },
    {
        id: "logistics",
        title: "Logistics Delay Predictor",
        type: "Machine Learning + BI",
        shortDesc: "FedEx supply chain optimization using ML and shipment performance analytics.",
        fullDesc: "Predictive system for supply-chain delay prediction with 94% accuracy. Analyzes 10,000+ shipment records to identify bottlenecks and improve on-time delivery KPIs through automated ETL pipelines.",
        tech: ["Python", "Machine Learning", "Power BI", "SQL"],
        image: "https://images.unsplash.com/photo-1586528116311-ad86d62886c9?q=80&w=800&auto=format&fit=crop",
        pbiUrl: null,
        mlUrl: "https://huggingface.co/spaces/ajaya-kumar-pradhan/Logistics-Delay-Predictor",
        github: "https://github.com/ajaya-kumar-pradhan/fedex-logistics-Delay-Prediction"
    },
    {
        id: "fraud",
        title: "Fraud Detection System",
        type: "Machine Learning",
        shortDesc: "High-recall ML system for real-time fraud monitoring with SHAP explainability.",
        fullDesc: "Diagnostic system for real-time fraud monitoring. Uses XGBoost and SHAP values to explain risk factors. Features interactive risk scoring dashboard deployed on Hugging Face.",
        tech: ["Python", "XGBoost", "SHAP", "Streamlit"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        pbiUrl: null,
        mlUrl: "https://huggingface.co/spaces/ajayapradhanconnect/Fraud-Detection-Risk-Intelligence-System",
        github: "https://github.com/ajaya-kumar-pradhan/fraud-detection-risk-intelligence-system"
    },
    {
        id: "airline",
        title: "Airline Referral Predictor",
        type: "Machine Learning",
        shortDesc: "Predicts customer recommendation likelihood from 10K+ airline reviews.",
        fullDesc: "Predictive model based on 10K+ customer reviews. Includes exploratory data analysis, feature engineering, and a classification model to predict the likelihood of passenger recommendations. Deployed on Hugging Face.",
        tech: ["Python", "Scikit-Learn", "EDA", "Streamlit"],
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?q=80&w=800&auto=format&fit=crop",
        pbiUrl: null,
        mlUrl: "https://huggingface.co/spaces/ajayapradhanconnect/Airline-Passenger-Referral-Prediction",
        github: "https://github.com/ajaya-kumar-pradhan/Airline-Passenger-Referral-Prediction"
    },
    {
        id: "book",
        title: "Book Recommendation Engine",
        type: "Machine Learning",
        shortDesc: "Personalized book recommendations using KNN and collaborative filtering.",
        fullDesc: "A ML recommendation system using K-Nearest Neighbors and collaborative filtering. Provides personalized book suggestions based on user ratings and metadata. Features interactive search and result UI deployed on Hugging Face.",
        tech: ["Python", "KNN", "Flask", "Streamlit"],
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop",
        pbiUrl: null,
        mlUrl: "https://huggingface.co/spaces/ajayapradhanconnect/Book-Recommendation-System",
        github: "https://github.com/ajaya-kumar-pradhan/Book-Recommendation-System"
    },
    {
        id: "amazon",
        title: "Amazon USA Sales Analysis",
        type: "SQL Analytics",
        shortDesc: "Deep-dive business intelligence on 20+ business queries using PostgreSQL.",
        fullDesc: "Comprehensive SQL-driven analysis of Amazon sales data. Investigates revenue trends, return rates, product performance, and customer segments using advanced CTEs and Window Functions.",
        tech: ["PostgreSQL", "SQL", "CTEs", "EDA"],
        image: "https://images.unsplash.com/photo-1523474253046-2cd2c78a9db1?q=80&w=800&auto=format&fit=crop",
        pbiUrl: null,
        mlUrl: null,
        github: "https://github.com/ajaya-kumar-pradhan/ecommerce-sql-analytics-project-"
    },
    {
        id: "airbnb",
        title: "Airbnb Market Analysis",
        type: "Exploratory Data Analysis",
        shortDesc: "Python-driven insights into 49,000+ Airbnb listings and revenue patterns.",
        fullDesc: "Large-scale EDA on Airbnb datasets. Identifies pricing trends, occupancy patterns, and neighbourhood-level revenue insights to drive strategic listing optimizations.",
        tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
        pbiUrl: null,
        mlUrl: null,
        github: "https://github.com/ajaya-kumar-pradhan/Airbnb-Hotel-Booking-Analysis"
    }
];

// ── Typing Animation ──
const typingEl = document.getElementById('typing-text');
const roles = ["Power BI Developer", "Data Analyst", "ML Engineer", "SQL Architect"];
let rIdx = 0, cIdx = 0, deleting = false;

function typeLoop() {
    if (!typingEl) return; // Safety check
    const word = roles[rIdx];
    typingEl.textContent = word.substring(0, deleting ? --cIdx : ++cIdx);
    if (!deleting && cIdx === word.length) setTimeout(() => deleting = true, 2200);
    else if (deleting && cIdx === 0) { deleting = false; rIdx = (rIdx + 1) % roles.length; }
    setTimeout(typeLoop, deleting ? 40 : 120);
}

// ── Render Projects ──
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = projects.map(p => `
        <div class="project-card glass reveal-target">
            <div class="project-thumb">
                <img src="${p.image}" alt="${p.title}" loading="lazy">
            </div>
            <div class="project-body">
                <div class="project-type">${p.type}</div>
                <h3>${p.title}</h3>
                <p>${p.shortDesc}</p>
                <div class="project-tags">
                    ${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                <div class="project-actions">
                    <button class="btn btn-primary btn-sm" onclick="openModal('${p.id}')">
                        <i data-lucide="eye"></i> Explore
                    </button>
                    <a href="${p.github}" target="_blank" class="btn btn-ghost btn-sm">
                        <i data-lucide="github"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

// ── Modal Logic ──
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');

window.openModal = function(id) {
    const p = projects.find(x => x.id === id);
    if (!p) return;

    const hasMultipleTabs = p.pbiUrl && p.mlUrl;

    modalBody.innerHTML = `
        <!-- Hero Row -->
        <div class="modal-hero">
            <div>
                <div class="modal-type">${p.type}</div>
                <h2 class="modal-title">${p.title}</h2>
                <p class="modal-desc">${p.shortDesc}</p>
                <div class="modal-links">
                    <a href="${p.github}" target="_blank" class="btn btn-ghost btn-sm"><i data-lucide="github"></i> GitHub</a>
                    ${p.mlUrl ? `<a href="${p.mlUrl}" target="_blank" class="btn btn-ghost btn-sm"><i data-lucide="external-link"></i> Live App</a>` : ''}
                    ${p.pbiUrl ? `<a href="${p.pbiUrl}" target="_blank" class="btn btn-ghost btn-sm"><i data-lucide="bar-chart-2"></i> Dashboard</a>` : ''}
                </div>
            </div>
            <div class="modal-hero-img">
                <img src="${p.image}" alt="${p.title}">
            </div>
        </div>

        <!-- Details Row -->
        <div class="modal-details">
            <div>
                <h3>Project Overview</h3>
                <p>${p.fullDesc}</p>
                <div class="project-tags" style="margin-top:1rem;">
                    ${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
            </div>
            <div>
                <h3>Key Highlights</h3>
                <ul style="list-style:none; display:flex; flex-direction:column; gap:0.6rem; margin-top:0.5rem;">
                    ${p.pbiUrl ? '<li style="display:flex;align-items:center;gap:0.5rem;font-size:0.85rem;color:var(--text-secondary);"><i data-lucide="check-circle" style="width:16px;color:var(--accent-emerald);"></i> Live Power BI Integration</li>' : ''}
                    ${p.mlUrl ? '<li style="display:flex;align-items:center;gap:0.5rem;font-size:0.85rem;color:var(--text-secondary);"><i data-lucide="check-circle" style="width:16px;color:var(--accent-emerald);"></i> ML App Deployed on HuggingFace</li>' : ''}
                    <li style="display:flex;align-items:center;gap:0.5rem;font-size:0.85rem;color:var(--text-secondary);"><i data-lucide="check-circle" style="width:16px;color:var(--accent-emerald);"></i> Source Code on GitHub</li>
                    <li style="display:flex;align-items:center;gap:0.5rem;font-size:0.85rem;color:var(--text-secondary);"><i data-lucide="check-circle" style="width:16px;color:var(--accent-emerald);"></i> End-to-End Implementation</li>
                </ul>
            </div>
        </div>

        <!-- Live Dashboard Row -->
        ${p.pbiUrl || p.mlUrl ? `
        <div class="modal-dashboard">
            <h3>Live Interactive Dashboard</h3>
            ${hasMultipleTabs ? `
                <div class="modal-tabs">
                    <button class="tab-btn active" onclick="switchTab(this, 'pbi-tab')">Power BI</button>
                    <button class="tab-btn" onclick="switchTab(this, 'ml-tab')">ML App</button>
                </div>
            ` : ''}
            ${p.pbiUrl ? `<div id="pbi-tab" class="tab-pane active"><div class="iframe-box"><iframe src="${p.pbiUrl}" allowFullScreen="true"></iframe></div></div>` : ''}
            ${p.mlUrl ? `<div id="ml-tab" class="tab-pane ${!p.pbiUrl ? 'active' : ''}"><div class="iframe-box"><iframe src="${p.mlUrl}?embed=true"></iframe></div></div>` : ''}
        </div>` : ''}
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
};

window.switchTab = function(btn, tabId) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(tabId).classList.add('active');
};

document.getElementById('modal-close').onclick = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
};

document.querySelector('.modal-overlay').onclick = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
};

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ── Scroll Reveal ──
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
    typeLoop();
    renderProjects();
    lucide.createIcons();

    document.querySelectorAll('.reveal-target').forEach(el => revealObserver.observe(el));
    // Also observe dynamically added cards
    setTimeout(() => {
        document.querySelectorAll('.reveal-target').forEach(el => revealObserver.observe(el));
    }, 100);

    // Contact form handling with EmailJS
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;

            // Using the correct Service ID and Template ID
            emailjs.sendForm('service_xl8g10g', 'template_pmy82xc', this)
                .then(() => {
                    btn.textContent = 'Message Sent Successfully!';
                    contactForm.reset();
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.disabled = false;
                    }, 3000);
                }, (error) => {
                    console.error('FAILED...', error);
                    btn.textContent = 'Failed to send';
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.disabled = false;
                    }, 3000);
                });
        });
    }
});
