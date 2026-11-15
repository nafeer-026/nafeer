/**
 * Build All Pages for NAFEER DIGITAL | نفير الرقمي
 */

const fs = require('fs');
const path = require('path');
const {
  renderDocument,
  services,
  blogs,
  SITE_URL,
  PHONE_DISPLAY,
  PHONE_RAW,
  EMAIL_MAIN,
  EMAIL_MGR,
  iconCheck,
  iconArrowRight,
  iconArrowLeft,
  iconWhatsApp,
  iconPhone,
  iconMail
} = require('./build_template.js');

// Load preserved SVGs if needed
const loopSvg = fs.existsSync('assets/svgs/how-we-work-a-continuous-loop.svg')
  ? fs.readFileSync('assets/svgs/how-we-work-a-continuous-loop.svg', 'utf8')
  : '';

// --------------------------------------------------------------------------
// 1. HOMEPAGE CONTENT GENERATOR
// --------------------------------------------------------------------------
function generateHomepageContent(lang = 'en', assetPrefix = '') {
  const isAr = lang === 'ar';
  const arrow = isAr ? iconArrowLeft : iconArrowRight;

  return `
    <!-- Hero Section -->
    <section class="hero-section" id="home">
      <div class="hero-bg-shapes">
        <div class="hero-shape-1"></div>
        <div class="hero-shape-2"></div>
      </div>
      <div class="container hero-grid">
        <div class="hero-content">
          <div class="hero-badge">
            ${iconCheck}
            <span>${isAr ? 'وكالة تسويق رقمي متكاملة لقطاع الشركات والمستهلكين' : 'B2B & B2C Digital Growth Partner'}</span>
          </div>
          <h1 class="hero-title">
            ${isAr 
              ? 'نحوّل الاستراتيجيات الرقمية إلى <span class="highlight">نمو حقيقي</span> ونتائج قابلة للقياس.'
              : 'Turning Digital Strategy Into <span class="highlight">Measurable Business Growth</span>.'}
          </h1>
          <p class="hero-desc">
            ${isAr
              ? 'نساعد الشركات على تعزيز حضورها الرقمي، والوصول إلى الجمهور المناسب، وتوليد عملاء محتملين ذوي جودة، وتحقيق نمو مستدام من خلال التسويق الرقمي القائم على البيانات.'
              : 'We help businesses strengthen their digital presence, reach the right audiences, generate quality leads, and achieve sustainable growth through data-driven digital marketing.'}
          </p>
          <div class="hero-ctas">
            <a href="#contact" class="btn btn-primary btn-lg">
              <span>${isAr ? 'دعنا نناقش مشروعك' : "Let's Discuss Your Project"}</span>
              ${arrow}
            </a>
            <a href="#services" class="btn btn-secondary btn-lg">
              <span>${isAr ? 'اكتشف خدماتنا' : 'Explore Our Services'}</span>
            </a>
          </div>
        </div>

        <div class="hero-visual">
          <div class="hero-card-composition">
            <img src="${assetPrefix}assets/images/hero-map.jpg" alt="NAFEER DIGITAL Worldwide Reach" class="hero-map-img" width="600" height="400">
            
            <div class="hero-stat-floating hero-stat-1">
              <div class="stat-icon-wrap">🎓</div>
              <div>
                <div class="stat-number">97.5%</div>
                <div class="stat-label">${isAr ? 'تدريب معهد إلينوي للتكنولوجيا' : 'Illinois Tech Certified Grade'}</div>
              </div>
            </div>

            <div class="hero-stat-floating hero-stat-2">
              <div class="stat-icon-wrap">📈</div>
              <div>
                <div class="stat-number">100%</div>
                <div class="stat-label">${isAr ? 'قرارات قائمة على البيانات' : 'Data-Driven Methodology'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Strip -->
    <section class="trust-strip">
      <div class="container trust-grid">
        <div class="trust-item">
          <div class="trust-icon">📊</div>
          <div>
            <div class="trust-title">${isAr ? 'قرارات قائمة على البيانات' : 'Data-Driven Decisions'}</div>
            <div class="trust-subtitle">${isAr ? 'استراتيجيات مبنية على الأرقام' : 'Zero guesswork marketing'}</div>
          </div>
        </div>
        <div class="trust-item">
          <div class="trust-icon">🏆</div>
          <div>
            <div class="trust-title">${isAr ? 'تميز أكاديمي معتمد' : 'Illinois Tech Excellence'}</div>
            <div class="trust-subtitle">${isAr ? 'إنجاز دورة تدريبية بنسبة 97.5%' : '97.5% grade achievement'}</div>
          </div>
        </div>
        <div class="trust-item">
          <div class="trust-icon">🌐</div>
          <div>
            <div class="trust-title">${isAr ? 'أسواق ماليزيا والعالم' : 'Malaysia & Global Focus'}</div>
            <div class="trust-subtitle">${isAr ? 'خبرة في الأسواق المحلية والدولية' : 'B2B export & local reach'}</div>
          </div>
        </div>
        <div class="trust-item">
          <div class="trust-icon">💬</div>
          <div>
            <div class="trust-title">${isAr ? 'تواصل مباشر وسريع' : 'Fast Direct WhatsApp'}</div>
            <div class="trust-subtitle">${isAr ? 'رد فوري خلال 24 ساعة' : 'Direct consultation access'}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section section-white" id="about">
      <div class="container">
        <div class="about-grid">
          <div>
            <div class="section-tag">${isAr ? 'عن نفير الرقمي' : 'About NAFEER DIGITAL'}</div>
            <h2 class="section-title">
              ${isAr 
                ? 'تسويق رقمي متكامل مبني على النمو التجاري المستدام'
                : 'Marketing Built For Sustainable Business Growth'}
            </h2>
            <p class="section-desc" style="margin-bottom: 1.5rem;">
              ${isAr
                ? 'نفير الرقمي هي وكالة تسويق رقمي متكاملة تقدّم حلولاً استراتيجية متقدمة للشركات في ماليزيا والأسواق الدولية. نجمع بين التحليل العميق للبيانات، والخبرة التقنية في محركات البحث، وصناعة المحتوى الإبداعي لتمكين الشركات من بناء حضور رقمي راسخ يجذب العملاء ويضاعف الإيرادات.'
                : 'NAFEER DIGITAL is a full-service digital marketing agency offering comprehensive, performance-driven marketing solutions to B2B and B2C businesses in Malaysia and international markets. We combine deep market research, technical search authority, and high-converting creative execution to deliver compounding commercial results.'}
            </p>
            <p class="section-desc">
              ${isAr
                ? 'نؤمن بأن التسويق الناجح يبدأ من فهم نموذج عملك وأهدافك المالية قبل إنفاق فلس واحد على الإعلانات. فلسفتنا تقوم على بناء أصول رقمية دائمة تواصل تحقيق الأرباح لسنوات قادمة.'
                : 'We believe successful marketing begins with understanding your commercial economics and customer psychology before spending a single dollar on advertising. Our philosophy focuses on engineering long-term digital assets that pay continuous dividends.'}
            </p>
            <div style="margin-top: 2rem;">
              <a href="#founder" class="btn btn-outline">
                <span>${isAr ? 'تعرف على إنجازات المؤسس' : 'Meet Our Founder & Credentials'}</span>
                ${arrow}
              </a>
            </div>
          </div>

          <div class="about-highlights">
            <div class="about-card">
              <div class="about-card-icon">🎯</div>
              <h3 class="about-card-title">${isAr ? 'علامات أقوى' : 'Stronger Brands'}</h3>
              <p class="about-card-desc">${isAr ? 'تموضع واضح في السوق وهوية متسقة وموثوقة عبر كافة القنوات والمنصات الرقمية.' : 'Clear commercial positioning and consistent authority across every digital touchpoint.'}</p>
            </div>
            <div class="about-card">
              <div class="about-card-icon">👥</div>
              <h3 class="about-card-title">${isAr ? 'عملاء مؤهلون' : 'More Customers'}</h3>
              <p class="about-card-desc">${isAr ? 'حملات استهداف ذكية تصل إلى أصحاب القرار والجمهور المستهدف في لحظة استعدادهم للشراء.' : 'Precision campaigns reaching the right buyers at the exact moment of commercial intent.'}</p>
            </div>
            <div class="about-card">
              <div class="about-card-icon">⚡</div>
              <h3 class="about-card-title">${isAr ? 'حضور رقمي متصدر' : 'Better Online Presence'}</h3>
              <p class="about-card-desc">${isAr ? 'مواقع فائقة السرعة وظهور عضوي متصدر في جوجل ومحتوى يجيب على تساؤلات العملاء.' : 'High-speed websites, dominant Google search visibility, and problem-solving content.'}</p>
            </div>
            <div class="about-card">
              <div class="about-card-icon">📈</div>
              <h3 class="about-card-title">${isAr ? 'نمو مستدام' : 'Sustainable Growth'}</h3>
              <p class="about-card-desc">${isAr ? 'نتائج مقاسة وتقارير شفافة توجه قراراتك القادمة وتحمي أرباحك من التذبذب.' : 'Measured ROI, clear reporting, and compounding equity that outlives fleeting ad campaigns.'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="section section-subtle" id="why-us">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">${isAr ? 'لماذا تختارنا' : 'Why Choose NAFEER DIGITAL'}</div>
          <h2 class="section-title">${isAr ? 'شريكك الاستراتيجي في التميز الرقمي' : 'Strategic Advantages That Drive Real Growth'}</h2>
          <p class="section-desc">${isAr ? 'نبتعد عن المقاييس السطحية والتخمينات العشوائية؛ نركز فقط على ما ينعكس مباشرة على نمو أعمالك ومبيعاتك.' : 'We reject vanity metrics and superficial guesswork. Every decision we execute directly supports your bottom-line commercial expansion.'}</p>
        </div>

        <div class="why-grid">
          <div class="why-card">
            <div class="why-icon">📊</div>
            <h3 class="why-card-title">${isAr ? 'استراتيجيات قائمة على البيانات' : 'Data-Driven Strategies'}</h3>
            <p class="why-card-desc">${isAr ? 'كل قرار نتخذه وكل ميزانية نخصصها تستند إلى بيانات السوق وسلوك المستهلك الحقيقي.' : 'Every budget allocation and campaign decision is governed by objective empirical search and behavioral data.'}</p>
          </div>
          <div class="why-card">
            <div class="why-icon">🛠️</div>
            <h3 class="why-card-title">${isAr ? 'حلول مخصصة لأعمالك' : 'Customized Solutions'}</h3>
            <p class="why-card-desc">${isAr ? 'لا نستخدم قوالب جاهزة مكررة؛ نصمم استراتيجية فريدة تلائم قطاعك وميزانيتك وأهدافك.' : 'No cookie-cutter templates. We build bespoke growth systems tailored to your specific margins and industry.'}</p>
          </div>
          <div class="why-card">
            <div class="why-icon">🔍</div>
            <h3 class="why-card-title">${isAr ? 'سيو ونمو عضوي مستدام' : 'SEO & Organic Growth'}</h3>
            <p class="why-card-desc">${isAr ? 'نبني أصولاً رقمية تتصدر نتائج البحث وتجلب عملاء مستمرين دون دفع تكلفة لكل نقرة.' : 'We construct compounding search authority that generates steady inbound leads without per-click ad fees.'}</p>
          </div>
          <div class="why-card">
            <div class="why-icon">💼</div>
            <h3 class="why-card-title">${isAr ? 'توليد عملاء لقطاع B2B' : 'B2B Lead Generation'}</h3>
            <p class="why-card-desc">${isAr ? 'خبرة عملية متخصصة في مساعدة الشركات والمصانع على جذب صفقات التصدير والمشترين الدوليين.' : 'Proven expertise helping manufacturers and corporate services land domestic and overseas buyers.'}</p>
          </div>
          <div class="why-card">
            <div class="why-icon">🎯</div>
            <h3 class="why-card-title">${isAr ? 'أبحاث السوق والجمهور' : 'Market & Audience Analysis'}</h3>
            <p class="why-card-desc">${isAr ? 'دراسة عميقة لاعتراضات عملائك، ونقاط ضعف المنافسين، والفرص غير المستغلة في السوق.' : 'Exhaustive qualitative and quantitative research uncovering buyer objections and competitor gaps.'}</p>
          </div>
          <div class="why-card">
            <div class="why-icon">📱</div>
            <h3 class="why-card-title">${isAr ? 'لوحات متابعة تفاعلية' : 'Transparent Analytics'}</h3>
            <p class="why-card-desc">${isAr ? 'لوحات تحكم مباشرة في Looker Studio توضح تكلفة العميل والعائد الاستثماري بكل وضوح.' : 'Live Google Looker Studio dashboards displaying exact CAC, ROAS, and conversion metrics 24/7.'}</p>
          </div>
          <div class="why-card">
            <div class="why-icon">🤝</div>
            <h3 class="why-card-title">${isAr ? 'تواصل شفاف ومباشر' : 'Transparent Communication'}</h3>
            <p class="why-card-desc">${isAr ? 'تواصل دائم مع الخبراء القائمين على مشروعك دون طبقات إدارية معقدة أو وعود زائفة.' : 'Direct access to the specialists executing your campaigns, with clear updates and zero bureaucratic red tape.'}</p>
          </div>
          <div class="why-card">
            <div class="why-icon">🚀</div>
            <h3 class="why-card-title">${isAr ? 'تحسين وتطوير مستمر' : 'Continuous Optimization'}</h3>
            <p class="why-card-desc">${isAr ? 'اختبارات مستمرة لصفحات الهبوط ونصوص الإعلانات ومسارات الشراء لمضاعفة معدلات التحويل.' : 'Relentless A/B testing of headlines, UX flows, and bidding strategies to maximize revenue yield.'}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section section-white" id="services">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">${isAr ? 'خدماتنا المتخصصة' : 'Our Core Services'}</div>
          <h2 class="section-title">${isAr ? 'حلول تسويق رقمي متكاملة ومصممة للتحويل' : 'Integrated Digital Marketing Services'}</h2>
          <p class="section-desc">${isAr ? 'نغطي كافة مراحل نموك الرقمي من خلال خدمات متخصصة تعمل بتناغم تام لتحقيق أفضل النتائج.' : 'From technical search engine dominance to high-converting web engineering and targeted paid media, our services build a unified growth engine.'}</p>
        </div>

        <div class="services-grid">
          ${services.map(s => `
            <div class="service-card">
              <div class="service-icon-wrap">⚡</div>
              <h3 class="service-card-title">${isAr ? s.titleAr : s.titleEn}</h3>
              <p class="service-card-desc">${isAr ? s.shortDescAr : s.shortDescEn}</p>
              <div class="service-card-features">
                ${(isAr ? s.benefitsAr : s.benefitsEn).slice(0, 3).map(b => `
                  <div class="service-card-feature-item">
                    ${iconCheck}
                    <span>${b}</span>
                  </div>
                `).join('')}
              </div>
              <a href="${isAr ? `${assetPrefix}ar/services/${s.slug}.html` : `${assetPrefix}en/services/${s.slug}.html`}" class="service-link">
                <span>${isAr ? 'تفاصيل الخدمة ومنهجية العمل' : 'View Service Details & Strategy'}</span>
                ${arrow}
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Working Process Section -->
    <section class="section section-subtle" id="process">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">${isAr ? 'كيف نعمل' : 'Our Working Process'}</div>
          <h2 class="section-title">${isAr ? 'منهجية علمية من 4 مراحل لتحقيق نمو مستمر' : 'A Rigorous 4-Stage Continuous Loop'}</h2>
          <p class="section-desc">${isAr ? 'عملية منضبطة تضمن تحويل الرؤى والأفكار إلى خطط محكمة وتنفيذ فائق الدقة وتحسين دائم.' : 'A structured methodology engineered to transform strategic diagnosis into flawless execution and compounding optimization.'}</p>
        </div>

        <div class="process-grid">
          <div class="process-card">
            <div class="process-step-num">01</div>
            <h3 class="process-card-title">${isAr ? 'الاستكشاف (Discover)' : 'Discover'}</h3>
            <p class="process-card-desc">${isAr ? 'نتعرف بعمق على طبيعة عملك، وهوامش ربحك، ومنافسيك، وسلوك عملائك المستهدفين.' : 'We diagnose your market position, buyer personas, unit economics, and competitive opportunities.'}</p>
          </div>
          <div class="process-card">
            <div class="process-step-num">02</div>
            <h3 class="process-card-title">${isAr ? 'التخطيط (Plan)' : 'Plan'}</h3>
            <p class="process-card-desc">${isAr ? 'نبني استراتيجية قنوات متكاملة، ونوزع الميزانية بذكاء، ونحدد مؤشرات أداء دقيقة وواضحة.' : 'We architect your channel strategy, conversion funnels, editorial calendars, and definitive KPIs.'}</p>
          </div>
          <div class="process-card">
            <div class="process-step-num">03</div>
            <h3 class="process-card-title">${isAr ? 'الإطلاق (Launch)' : 'Launch'}</h3>
            <p class="process-card-desc">${isAr ? 'ننفذ عبر السيو، والمحتوى، والإعلانات الممولة، وصفحات الهبوط بأعلى معايير الجودة.' : 'We execute campaigns across search, social, high-speed landing pages, and lead workflows.'}</p>
          </div>
          <div class="process-card">
            <div class="process-step-num">04</div>
            <h3 class="process-card-title">${isAr ? 'التحسين (Improve)' : 'Improve'}</h3>
            <p class="process-card-desc">${isAr ? 'نقيس النتائج ونحلل البيانات ونختبر المتغيرات باستمرار لتوسيع نطاق النجاح ومضاعفة الأرباح.' : 'We measure revenue attribution, conduct rigorous A/B tests, and scale winning campaigns.'}</p>
          </div>
        </div>

        ${loopSvg ? `
          <div class="process-svg-container" style="max-width:900px; margin:3rem auto 0;">
            ${loopSvg}
          </div>
        ` : ''}
      </div>
    </section>

    <!-- Founder Credentials & Experience Section (Section 8) -->
    <section class="section section-white" id="founder">
      <div class="container">
        <div class="founder-card">
          <div class="founder-grid">
            <div class="founder-avatar-box">
              <div class="founder-badge-verified">
                ${iconCheck}
                <span>${isAr ? 'مؤهلات وخبرات مهنية معتمدة' : 'Verified Professional Credentials'}</span>
              </div>
              <div class="founder-photo-holder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <h3 class="founder-name">${isAr ? 'محمد الهادي النيل' : 'Mohamed Alhadi Alneel'}</h3>
              <div class="founder-role">${isAr ? 'مؤسس وخبير استراتيجيات التسويق الرقمي | نفير الرقمي' : 'Founder & Digital Marketing Strategist | NAFEER DIGITAL'}</div>
              <div style="margin-top:1rem; font-size:0.875rem; color:var(--text-muted);">
                ${isAr ? 'خبرة تطبيقية متخصصة في السيو، وأبحاث السوق، والعمليات التجارية' : 'Specialized background in technical SEO, market research & commercial operations.'}
              </div>
            </div>

            <div>
              <div class="section-tag">${isAr ? 'خلفية وخبرات المؤسس' : 'Founder Experience & Background'}</div>
              <h2 style="font-size: clamp(1.5rem, 2.5vw, 2.25rem); font-weight:800; margin-bottom:1rem;">
                ${isAr ? 'كفاءة مهنية وأكاديمية موثقة تقود نجاح عملائنا' : 'Academic Rigor & Hands-On Strategic Execution'}
              </h2>
              <p class="section-desc" style="font-size:0.95rem; margin-bottom:1.25rem;">
                ${isAr
                  ? 'يتميز نفير الرقمي بقيادة تجمع بين التأهيل الأكاديمي المرموق والخبرة التطبيقية في إدارة العمليات التسويقية والتجارية. نلتزم بالفصل الواضح بين المؤهلات الفردية الموثقة للمؤسس وإنجازات الشركة، مع تطبيق أعلى معايير الصدق والشفافية التامة.'
                  : 'NAFEER DIGITAL is driven by verified academic excellence and proven field experience in digital marketing operations. We maintain absolute transparency, distinguishing individual verified credentials from organizational milestones while maintaining rigorous ethical standards.'}
              </p>

              <div class="founder-qual-list">
                <div class="qual-item">
                  <div class="qual-icon">🎓</div>
                  <div>
                    <h4 class="qual-title">${isAr ? 'معهد إلينوي للتكنولوجيا (IIT)' : 'Illinois Institute of Technology'}</h4>
                    <p class="qual-detail">${isAr ? 'إتمام دورة التسويق الرقمي بدرجة امتياز استثنائية بلغت 97.5%.' : 'Completed comprehensive Digital Marketing course with an outstanding 97.5% grade.'}</p>
                  </div>
                </div>
                <div class="qual-item">
                  <div class="qual-icon">🔍</div>
                  <div>
                    <h4 class="qual-title">${isAr ? 'سيو متقدم وأبحاث السوق' : 'SEO & Market Research'}</h4>
                    <p class="qual-detail">${isAr ? 'خبرة عملية متعمقة في تحليل الكلمات المفتاحية، واستراتيجيات المحتوى، وتدقيق السيو التقني.' : 'Proven experience in search intent mapping, content strategies, and deep competitive analysis.'}</p>
                  </div>
                </div>
                <div class="qual-item">
                  <div class="qual-icon">💼</div>
                  <div>
                    <h4 class="qual-title">${isAr ? 'إدارة العمليات والفرق' : 'Business Operations'}</h4>
                    <p class="qual-detail">${isAr ? 'خبرة عملية في تخطيط الأعمال وإدارة الفرق التنفيذية لضمان جودة التسليم.' : 'Extensive hands-on background in operational workflow management and project leadership.'}</p>
                  </div>
                </div>
                <div class="qual-item">
                  <div class="qual-icon">🤝</div>
                  <div>
                    <h4 class="qual-title">${isAr ? 'مشاركات مجتمعية وتطوعية' : 'Community Leadership'}</h4>
                    <p class="qual-detail">${isAr ? 'مشاركات تطوعية فاعلة في التمكين الرقمي ودعم المبادرات المجتمعية.' : 'Active voluntary contributions to digital marketing empowerment and community initiatives.'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio & Case Studies Section (Section 12) -->
    <section class="section section-subtle" id="portfolio">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">${isAr ? 'سجل الأعمال ودراسات الحالة' : 'Selected Portfolio & Case Studies'}</div>
          <h2 class="section-title">${isAr ? 'نتائج حقيقية ونماذج أعمال ناجحة' : 'Real Client Results & Proven Work'}</h2>
          <p class="section-desc">${isAr ? 'نستعرض مجموعة من أعمالنا الناجحة في بناء صفحات الهبوط، ومحتوى السيو، ومسارات توليد العملاء لشركات ومصانع مرموقة.' : 'Explore our featured work delivering structured SEO guides, high-converting landing pages, and international export lead engines.'}</p>
        </div>

        <div class="portfolio-grid">
          <!-- Project 1: TAKO Healthcare -->
          <div class="portfolio-card">
            <div class="portfolio-image-wrap">
              <img src="${assetPrefix}assets/images/case-study-tako-healthcare.jpg" alt="TAKO Healthcare Case Study" class="portfolio-image" width="600" height="375">
              <span class="portfolio-badge">${isAr ? 'سيو ومحتوى B2B' : 'SEO & B2B Content'}</span>
            </div>
            <div class="portfolio-body">
              <h3 class="portfolio-title">TAKO Healthcare</h3>
              <p class="portfolio-desc">
                ${isAr
                  ? 'صفحة دليل مهيكلة ومحسّنة لمحركات البحث لمصنّع عبوات طبية وغرف نظيفة، بأقسام واضحة ونطاق المنتجات وأسئلة شائعة ودعوات لطلب عروض أسعار للتصدير.'
                  : 'A structured SEO guide page for a medical packaging and cleanroom manufacturer, featuring technical specs, comprehensive product catalog, FAQs, and quotation RFQ funnels.'}
              </p>
              <div class="portfolio-tags">
                <span class="portfolio-tag">${isAr ? 'تغليف طبي' : 'Medical Packaging'}</span>
                <span class="portfolio-tag">${isAr ? 'سيو محركات البحث' : 'B2B SEO'}</span>
                <span class="portfolio-tag">${isAr ? 'عروض أسعار' : 'RFQ Funnel'}</span>
              </div>
              <a href="https://www.takoflexibles.com/medical-packaging-distributors-in-malaysia/" target="_blank" rel="noopener noreferrer" class="portfolio-action">
                <span>${isAr ? 'معاينة المشروع الحي' : 'View Live Project'}</span>
                ${arrow}
              </a>
            </div>
          </div>

          <!-- Project 2: TAKO Internship -->
          <div class="portfolio-card">
            <div class="portfolio-image-wrap">
              <img src="${assetPrefix}assets/images/case-study-tako-internship.jpg" alt="TAKO Internship Case Study" class="portfolio-image" width="600" height="375">
              <span class="portfolio-badge">${isAr ? 'صفحة هبوط وتحويل' : 'Landing Page & CRO'}</span>
            </div>
            <div class="portfolio-body">
              <h3 class="portfolio-title">TAKO Internship</h3>
              <p class="portfolio-desc">
                ${isAr
                  ? 'صفحة هبوط مصممة لزيادة التحويل لبرنامج تدريب عن بُعد، بمزايا واضحة وأسئلة الأهلية وزر تقديم فوري عبر واتساب لتقليل الاحتكاك وتسهيل التقديم.'
                  : 'A conversion-focused landing page for a remote work-from-home internship programme, structured with key benefits, eligibility checklists, and direct WhatsApp application triggers.'}
              </p>
              <div class="portfolio-tags">
                <span class="portfolio-tag">${isAr ? 'تعليم وتدريب' : 'Education & Training'}</span>
                <span class="portfolio-tag">${isAr ? 'تحسين التحويل' : 'Conversion UX'}</span>
                <span class="portfolio-tag">${isAr ? 'تكامل واتساب' : 'WhatsApp Apply'}</span>
              </div>
              <a href="https://www.takointernship.com/work-from-home-internship-malaysia/" target="_blank" rel="noopener noreferrer" class="portfolio-action">
                <span>${isAr ? 'معاينة المشروع الحي' : 'View Live Project'}</span>
                ${arrow}
              </a>
            </div>
          </div>

          <!-- Project 3: TAKO Digital Marketing -->
          <div class="portfolio-card">
            <div class="portfolio-image-wrap">
              <img src="${assetPrefix}assets/images/case-study-tako-digital-marketing.jpg" alt="TAKO Digital Marketing Case Study" class="portfolio-image" width="600" height="375">
              <span class="portfolio-badge">${isAr ? 'دليل تصدير وتوليد عملاء' : 'Export Lead Generation'}</span>
            </div>
            <div class="portfolio-body">
              <h3 class="portfolio-title">TAKO Digital Marketing</h3>
              <p class="portfolio-desc">
                ${isAr
                  ? 'دليل استراتيجي لتوليد صفقات التصدير موجّه للمصنّعين، بخطة من 6 خطوات ودعوات واضحة للتواصل أو طلب استفسار عبر واتساب لجذب المستوردين الدوليين.'
                  : 'An export lead generation guide engineered for regional factories, providing a 6-step blueprint, international authority positioning, and multi-channel buyer enquiry funnels.'}
              </p>
              <div class="portfolio-tags">
                <span class="portfolio-tag">${isAr ? 'تسويق صناعي' : 'Industrial B2B'}</span>
                <span class="portfolio-tag">${isAr ? 'تصدير دولي' : 'Export Buyers'}</span>
                <span class="portfolio-tag">${isAr ? 'تسويق بالمحتوى' : 'Content Marketing'}</span>
              </div>
              <a href="https://www.takodigitalmarketing.com/how-malaysian-factories-land-overseas-buyers/" target="_blank" rel="noopener noreferrer" class="portfolio-action">
                <span>${isAr ? 'معاينة المشروع الحي' : 'View Live Project'}</span>
                ${arrow}
              </a>
            </div>
          </div>
        </div>

        <!-- Demonstration Notice & Demonstration Projects -->
        <div style="margin-top: 3rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: var(--radius-lg); padding: 1.5rem; text-align: center;">
          <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--primary);">
            ${isAr ? '💡 مشاريع ونماذج توضيحية إضافية (Demonstration Projects)' : '💡 Additional Demonstration & Capability Projects'}
          </h4>
          <p style="font-size: 0.875rem; color: var(--text-muted); max-width: 720px; margin: 0 auto;">
            ${isAr 
              ? 'بالإضافة إلى أعمالنا الحية الموثقة أعلاه، نبني نماذج استراتيجية وتطبيقية متطورة توضح قدراتنا في تحسين سيو البرمجيات العالمية (SaaS)، ومتاجر التجارة الإلكترونية العابرة للحدود، وأنظمة السيو المحلي متعددة الفروع.'
              : 'In addition to our live client work above, we build comprehensive demonstration architectures showcasing our advanced capabilities in B2B SaaS inbound funnels, cross-border e-commerce SEO, and multi-location medical practices.'}
          </p>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section section-white" id="testimonials">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">${isAr ? 'آراء العملاء وشركاء النجاح' : 'Client Testimonials'}</div>
          <h2 class="section-title">${isAr ? 'ثقة مبنية على الالتزام والنتائج الملموسة' : 'Built On Transparency & Measurable Impact'}</h2>
          <p class="section-desc">${isAr ? 'نفخر بشراكتنا مع مؤسسات وطنية ودولية تثق في كفاءتنا والتزامنا الصادق بنمو أعمالها.' : 'Hear what business leaders and operational managers say about collaborating with NAFEER DIGITAL.'}</p>
        </div>

        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-quote">
              ${isAr
                ? '“ساعدنا فريق نفير الرقمي على إعادة هيكلة صفحات منتجاتنا الطبية للسيو؛ بدأنا نلاحظ استفسارات حقيقية من موزعين في جنوب شرق آسيا خلال أشهر قليلة.”'
                : '“NAFEER DIGITAL helped us restructure our medical packaging product guides for search engines. We began receiving qualified inquiries from regional distributors within a few months.”'}
            </p>
            <div class="testimonial-author-box">
              <div class="testimonial-avatar">T</div>
              <div>
                <div class="testimonial-name">${isAr ? 'إدارة التسويق والتطوير' : 'Marketing & Commercial Ops'}</div>
                <div class="testimonial-company">${isAr ? 'قطاع التعبئة الطبية والصناعية' : 'Medical Packaging Sector'}</div>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-quote">
              ${isAr
                ? '“تصميم صفحة الهبوط وتكامل مسار التقديم عبر واتساب جعل تجربة المتقدمين سلسة للغاية ورفع معدلات إكمال الطلبات بشكل ملحوظ مقارنة بالنظم القديمة.”'
                : '“The landing page architecture and seamless WhatsApp integration made our applicant flow frictionless, resulting in substantially higher completed submissions.”'}
            </p>
            <div class="testimonial-author-box">
              <div class="testimonial-avatar">K</div>
              <div>
                <div class="testimonial-name">${isAr ? 'فريق إدارة برامج التدريب' : 'Workforce Program Director'}</div>
                <div class="testimonial-company">${isAr ? 'برامج التدريب والتأهيل المهني' : 'Workforce Development Group'}</div>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-quote">
              ${isAr
                ? '“أكثر ما يميز نفير الرقمي هو الوضوح التام والاعتماد على الأرقام دون أي وعود وهمية. تقاريرهم منتظمة وتساعدنا في اتخاذ القرارات التسويقية بثقة.”'
                : '“What sets NAFEER DIGITAL apart is their honesty and data-driven mindset. No false promises—just disciplined execution and transparent reporting that guides our decisions.”'}
            </p>
            <div class="testimonial-author-box">
              <div class="testimonial-avatar">S</div>
              <div>
                <div class="testimonial-name">${isAr ? 'مدير عمليات تجارية' : 'Commercial Operations Lead'}</div>
                <div class="testimonial-company">${isAr ? 'خدمات الشركات B2B' : 'B2B Enterprise Services'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Section -->
    <section class="section section-subtle" id="blog">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">${isAr ? 'المدونة ومقالات المعرفة' : 'Latest Insights & Articles'}</div>
          <h2 class="section-title">${isAr ? 'أفكار ورؤى عملية في التسويق الرقمي ونمو الأعمال' : 'Actionable Digital Marketing Strategies'}</h2>
          <p class="section-desc">${isAr ? 'مقالات معمقة ومبنية على أبحاث السوق لمساعدتك على فهم خوارزميات البحث وتطوير حضورك الرقمي.' : 'Deeply researched guides, search engine analysis, and practical playbooks to accelerate your business growth.'}</p>
        </div>

        <div class="blog-grid">
          ${blogs.slice(0, 6).map(b => `
            <div class="blog-card">
              <div class="blog-thumb-wrap">
                <div class="blog-thumb-icon">📰</div>
              </div>
              <div class="blog-body">
                <div class="blog-meta">
                  <span class="blog-category">${isAr ? b.categoryAr : b.categoryEn}</span>
                  <span>•</span>
                  <span>${isAr ? b.readTimeAr : b.readTimeEn}</span>
                </div>
                <h3 class="blog-title">
                  <a href="${isAr ? `${assetPrefix}ar/blog/${b.slug}.html` : `${assetPrefix}en/blog/${b.slug}.html`}">
                    ${isAr ? b.titleAr : b.titleEn}
                  </a>
                </h3>
                <p class="blog-excerpt">${isAr ? b.excerptAr : b.excerptEn}</p>
                <a href="${isAr ? `${assetPrefix}ar/blog/${b.slug}.html` : `${assetPrefix}en/blog/${b.slug}.html`}" class="blog-read-more">
                  <span>${isAr ? 'اقرأ المقال كاملاً' : 'Read Full Article'}</span>
                  ${arrow}
                </a>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="text-align: center; margin-top: 3rem;">
          <a href="${isAr ? `${assetPrefix}ar/blog/` : `${assetPrefix}en/blog/`}" class="btn btn-outline btn-lg">
            <span>${isAr ? 'تصفح كافة المقالات (13 مقالاً)' : 'Explore All 13 In-Depth Articles'}</span>
            ${arrow}
          </a>
        </div>
      </div>
    </section>

    <!-- Contact & Lead Generation Section (Section 13) -->
    <section class="section section-white" id="contact">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">${isAr ? 'اتصل بنا وابدأ مشروعك' : 'Contact & Lead Generation'}</div>
          <h2 class="section-title">${isAr ? 'جاهز لتحويل استراتيجيتك إلى نمو حقيقي؟' : 'Ready to Transform Your Digital Growth?'}</h2>
          <p class="section-desc">${isAr ? 'أخبرنا عن نشاطك التجاري وأهدافك، وسيقوم فريقنا بدراسة متطلباتك والتواصل معك بخطة عمل مخصصة.' : 'Tell us about your business, target market, and growth targets. We will analyze your requirements and deliver a customized growth roadmap.'}</p>
        </div>

        <div class="contact-grid">
          <!-- Multi-field Interactive Form -->
          <div class="contact-form-box">
            <h3 class="form-title">${isAr ? 'طلب استشارة ومناقشة مشروع' : 'Request a Growth Consultation'}</h3>
            <p class="form-subtitle">${isAr ? 'املأ النموذج أدناه وسيتواصل معك خبراؤنا في غضون 24 ساعة.' : 'Complete the form below. Our strategic team responds within 24 business hours.'}</p>

            <form id="contact-form" novalidate>
              <div class="form-grid-2">
                <div class="form-group">
                  <label class="form-label">${isAr ? 'الاسم الكامل *' : 'Full Name *'}</label>
                  <input type="text" name="name" class="form-input" placeholder="${isAr ? 'مثال: أحمد عبد الله' : 'e.g. John Doe'}" required>
                </div>
                <div class="form-group">
                  <label class="form-label">${isAr ? 'البريد الإلكتروني المهني *' : 'Business Email *'}</label>
                  <input type="email" name="email" class="form-input" placeholder="${isAr ? 'name@company.com' : 'name@company.com'}" required>
                </div>
              </div>

              <div class="form-grid-2">
                <div class="form-group">
                  <label class="form-label">${isAr ? 'رقم الهاتف / واتساب' : 'Phone / WhatsApp Number'}</label>
                  <input type="tel" name="phone" class="form-input" placeholder="+60 11 ...">
                </div>
                <div class="form-group">
                  <label class="form-label">${isAr ? 'اسم الشركة أو النشاط' : 'Company Name'}</label>
                  <input type="text" name="company" class="form-input" placeholder="${isAr ? 'اسم شركتك' : 'Your Company Ltd'}">
                </div>
              </div>

              <div class="form-grid-2">
                <div class="form-group">
                  <label class="form-label">${isAr ? 'الخدمة المطلوبة' : 'Service of Interest'}</label>
                  <select name="service" class="form-select">
                    <option value="">${isAr ? '-- اختر الخدمة المطلوبة --' : '-- Select a Service --'}</option>
                    ${services.map(s => `<option value="${s.slug}">${isAr ? s.titleAr : s.titleEn}</option>`).join('')}
                    <option value="complete-strategy">${isAr ? 'استراتيجية تسويق رقمي شاملة' : 'Complete Digital Growth Strategy'}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">${isAr ? 'نوع النشاط التجاري' : 'Business Model'}</label>
                  <select name="business_type" class="form-select">
                    <option value="b2b">${isAr ? 'B2B (نبيع للشركات والمصانع)' : 'B2B (We sell to businesses)'}</option>
                    <option value="b2c">${isAr ? 'B2C (نبيع للمستهلكين الأفراد)' : 'B2C (We sell to consumers)'}</option>
                    <option value="both">${isAr ? 'كلاهما (B2B و B2C)' : 'Both B2B & B2C'}</option>
                  </select>
                </div>
              </div>

              <div class="form-grid-2">
                <div class="form-group">
                  <label class="form-label">${isAr ? 'الميزانية الشهرية التقديرية' : 'Estimated Monthly Budget'}</label>
                  <select name="budget" class="form-select">
                    <option value="500-1000">$500 - $1,000 / month</option>
                    <option value="1000-2500">$1,000 - $2,500 / month</option>
                    <option value="2500-5000">$2,500 - $5,000 / month</option>
                    <option value="5000+">$5,000+ / month</option>
                    <option value="one-off">${isAr ? 'مشروع لمرة واحدة' : 'One-Off Project'}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">${isAr ? 'موعد البدء المطلوب' : 'Target Start Date'}</label>
                  <select name="timeline" class="form-select">
                    <option value="immediately">${isAr ? 'فوراً بأسرع وقت' : 'Immediately'}</option>
                    <option value="1-month">${isAr ? 'خلال شهر' : 'Within 1 Month'}</option>
                    <option value="1-3-months">${isAr ? 'من 1 إلى 3 أشهر' : '1 - 3 Months'}</option>
                    <option value="exploring">${isAr ? 'أستكشف الخيارات فقط' : 'Just Exploring'}</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">${isAr ? 'نبذة عن مشروعك وأهدافك الرئيسية' : 'Project Details & Primary Goals'}</label>
                <textarea name="message" class="form-textarea" placeholder="${isAr ? 'أخبرنا عن منتجاتك، جمهورك المستهدف، وتطلعاتك التسويقية...' : 'Tell us about your services, target audience, and primary growth objectives...'}"></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-full">
                <span>${isAr ? 'إرسال طلب الاستشارة' : 'Submit Consultation Request'}</span>
                ${arrow}
              </button>

              <div id="form-feedback" class="form-feedback"></div>
            </form>
          </div>

          <!-- Contact Information & WhatsApp Card -->
          <div class="contact-sidebar">
            <div class="contact-info-card" style="background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); color:#FFFFFF;">
              <div class="contact-info-icon" style="background:rgba(255,255,255,0.15); color:var(--accent);">
                ${iconWhatsApp}
              </div>
              <div>
                <div class="contact-info-title" style="color:var(--accent); font-weight:700;">
                  ${isAr ? 'تفضّل محادثة سريعة ومباشرة؟' : 'Prefer Immediate Direct Chat?'}
                </div>
                <div style="font-size: 0.9375rem; margin-bottom: 1rem; color: rgba(255,255,255,0.85);">
                  ${isAr 
                    ? 'راسلنا مباشرة على واتساب لنناقش متطلبات نشاطك فوراً دون انتظار.' 
                    : 'Message our executive team directly on WhatsApp to discuss your requirements instantly.'}
                </div>
                <a href="https://wa.me/${PHONE_RAW}" class="btn btn-whatsapp btn-sm js-whatsapp-link">
                  ${iconWhatsApp} ${isAr ? 'تواصل عبر واتساب الآن' : 'Start WhatsApp Chat'}
                </a>
              </div>
            </div>

            <div class="contact-info-card">
              <div class="contact-info-icon">
                ${iconPhone}
              </div>
              <div>
                <div class="contact-info-title">${isAr ? 'الهاتف المباشر' : 'Direct Phone Line'}</div>
                <div class="contact-info-val">
                  <a href="tel:+${PHONE_RAW}">${PHONE_DISPLAY}</a>
                </div>
                <div style="font-size:0.75rem; color:var(--text-light); margin-top:2px;">
                  ${isAr ? 'متاح من الإثنين إلى الجمعة (9 ص - 6 م GMT+8)' : 'Mon - Fri, 9:00 AM - 6:00 PM (GMT+8)'}
                </div>
              </div>
            </div>

            <div class="contact-info-card">
              <div class="contact-info-icon">
                ${iconMail}
              </div>
              <div>
                <div class="contact-info-title">${isAr ? 'البريد الإلكتروني العام' : 'General Enquiries'}</div>
                <div class="contact-info-val">
                  <a href="mailto:${EMAIL_MAIN}">${EMAIL_MAIN}</a>
                </div>
              </div>
            </div>

            <div class="contact-info-card">
              <div class="contact-info-icon">
                ${iconMail}
              </div>
              <div>
                <div class="contact-info-title">${isAr ? 'بريد الإدارة المباشر' : 'Manager Direct Email'}</div>
                <div class="contact-info-val">
                  <a href="mailto:${EMAIL_MGR}">${EMAIL_MGR}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// --------------------------------------------------------------------------
// 2. BUILD HOMEPAGES
// --------------------------------------------------------------------------
function buildHomepages() {
  console.log('Generating Homepages...');

  const schemaEn = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NAFEER DIGITAL",
    "image": `${SITE_URL}/assets/images/logo.jpg`,
    "@id": SITE_URL,
    "url": SITE_URL,
    "telephone": `+${PHONE_RAW}`,
    "email": EMAIL_MAIN,
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MY"
    },
    "description": "Full-service digital marketing agency in Malaysia serving B2B and B2C clients worldwide with Search Engine Optimization, PPC, B2B lead generation, and growth strategy.",
    "founder": {
      "@type": "Person",
      "name": "Mohamed Alhadi Alneel"
    }
  };

  const schemaAr = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "نفير الرقمي | NAFEER DIGITAL",
    "image": `${SITE_URL}/assets/images/logo.jpg`,
    "@id": `${SITE_URL}/ar/`,
    "url": `${SITE_URL}/ar/`,
    "telephone": `+${PHONE_RAW}`,
    "email": EMAIL_MAIN,
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MY"
    },
    "description": "وكالة نفير الرقمي للتسويق الرقمي المتكامل في ماليزيا؛ نقدم خدمات تحسين محركات البحث، وإعلانات جوجل، وتوليد العملاء للشركات والمصانع، واستراتيجيات النمو القائمة على البيانات.",
    "founder": {
      "@type": "Person",
      "name": "Mohamed Alhadi Alneel"
    }
  };

  // 1. Root index.html (Default English with language auto-router in main.js)
  const rootHtml = renderDocument({
    lang: 'en',
    title: 'NAFEER DIGITAL — Full-Service Digital Marketing Agency',
    description: 'Transform digital strategy into measurable business growth with NAFEER DIGITAL. Expert Search Engine Optimization (SEO), B2B Lead Gen, PPC, and Growth Strategy.',
    canonicalUrl: `${SITE_URL}/`,
    alternateEnUrl: `${SITE_URL}/en/`,
    alternateArUrl: `${SITE_URL}/ar/`,
    content: generateHomepageContent('en', ''),
    schemaJson: schemaEn,
    assetPrefix: ''
  });
  fs.writeFileSync('index.html', rootHtml);

  // 2. /en/index.html (Dedicated English route)
  const enHtml = renderDocument({
    lang: 'en',
    title: 'NAFEER DIGITAL — Full-Service Digital Marketing Agency',
    description: 'Transform digital strategy into measurable business growth with NAFEER DIGITAL. Expert Search Engine Optimization (SEO), B2B Lead Gen, PPC, and Growth Strategy.',
    canonicalUrl: `${SITE_URL}/en/`,
    alternateEnUrl: `${SITE_URL}/en/`,
    alternateArUrl: `${SITE_URL}/ar/`,
    content: generateHomepageContent('en', '../'),
    schemaJson: schemaEn,
    assetPrefix: '../'
  });
  fs.writeFileSync('en/index.html', enHtml);

  // 3. /ar/index.html (Dedicated Arabic route)
  const arHtml = renderDocument({
    lang: 'ar',
    title: 'نفير الرقمي — وكالة تسويق رقمي متكاملة واستراتيجيات نمو مستدام',
    description: 'نحوّل الاستراتيجيات الرقمية إلى نمو حقيقي ونتائج قابلة للقياس. وكالة نفير الرقمي تقدم خدمات تحسين محركات البحث (SEO)، إعلانات جوجل، وتوليد صفقات الشركات.',
    canonicalUrl: `${SITE_URL}/ar/`,
    alternateEnUrl: `${SITE_URL}/en/`,
    alternateArUrl: `${SITE_URL}/ar/`,
    content: generateHomepageContent('ar', '../'),
    schemaJson: schemaAr,
    assetPrefix: '../'
  });
  fs.writeFileSync('ar/index.html', arHtml);

  console.log('✓ Homepages generated: index.html, en/index.html, ar/index.html');
}

// --------------------------------------------------------------------------
// 3. BUILD ALL 11 SERVICE PAGES + DIRECTORY (EN & AR)
// --------------------------------------------------------------------------
function buildServicePages() {
  console.log('Generating Service Pages...');

  // Services Directory in EN
  const enServicesDirectoryContent = `
    <div class="page-hero">
      <div class="container">
        <div class="breadcrumbs">
          <a href="../">Home</a> <span>/</span> <span>Services</span>
        </div>
        <h1 class="section-title">Our Digital Marketing Services</h1>
        <p class="section-desc" style="color:rgba(255,255,255,0.85); max-width:680px; margin:0 auto;">
          Comprehensive, data-driven services engineered to attract qualified clients, dominate search rankings, and maximize commercial revenue.
        </p>
      </div>
    </div>
    <div class="section section-white">
      <div class="container">
        <div class="services-grid">
          ${services.map(s => `
            <div class="service-card">
              <div class="service-icon-wrap">⚡</div>
              <h2 class="service-card-title">${s.titleEn}</h2>
              <p class="service-card-desc">${s.shortDescEn}</p>
              <div class="service-card-features">
                ${s.benefitsEn.slice(0, 3).map(b => `
                  <div class="service-card-feature-item">
                    ${iconCheck}
                    <span>${b}</span>
                  </div>
                `).join('')}
              </div>
              <a href="${s.slug}.html" class="service-link">
                <span>View Full Service Strategy</span>
                ${iconArrowRight}
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  fs.writeFileSync('en/services/index.html', renderDocument({
    lang: 'en',
    title: 'Digital Marketing Services | NAFEER DIGITAL',
    description: 'Explore the full spectrum of digital marketing services from NAFEER DIGITAL: SEO, Technical SEO, Local SEO, B2B Lead Gen, PPC, and Web Development.',
    canonicalUrl: `${SITE_URL}/en/services/`,
    alternateEnUrl: `${SITE_URL}/en/services/`,
    alternateArUrl: `${SITE_URL}/ar/services/`,
    content: enServicesDirectoryContent,
    assetPrefix: '../../'
  }));

  // Services Directory in AR
  const arServicesDirectoryContent = `
    <div class="page-hero">
      <div class="container">
        <div class="breadcrumbs">
          <a href="../">الرئيسية</a> <span>/</span> <span>خدماتنا</span>
        </div>
        <h1 class="section-title">خدمات التسويق الرقمي المتكاملة</h1>
        <p class="section-desc" style="color:rgba(255,255,255,0.85); max-width:680px; margin:0 auto;">
          حلول تسويقية متقدمة وقائمة على البيانات لمساعدتك على تصدر نتائج البحث وجذب عملاء مؤهلين ومضاعفة الإيرادات التجارية.
        </p>
      </div>
    </div>
    <div class="section section-white">
      <div class="container">
        <div class="services-grid">
          ${services.map(s => `
            <div class="service-card">
              <div class="service-icon-wrap">⚡</div>
              <h2 class="service-card-title">${s.titleAr}</h2>
              <p class="service-card-desc">${s.shortDescAr}</p>
              <div class="service-card-features">
                ${s.benefitsAr.slice(0, 3).map(b => `
                  <div class="service-card-feature-item">
                    ${iconCheck}
                    <span>${b}</span>
                  </div>
                `).join('')}
              </div>
              <a href="${s.slug}.html" class="service-link">
                <span>تفاصيل الخدمة ومنهجية العمل</span>
                ${iconArrowLeft}
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  fs.writeFileSync('ar/services/index.html', renderDocument({
    lang: 'ar',
    title: 'خدمات التسويق الرقمي الشاملة | نفير الرقمي',
    description: 'اكتشف دليل خدمات التسويق الرقمي من نفير الرقمي: تحسين محركات البحث، إعلانات جوجل، توليد العملاء للشركات B2B، وتطوير المواقع.',
    canonicalUrl: `${SITE_URL}/ar/services/`,
    alternateEnUrl: `${SITE_URL}/en/services/`,
    alternateArUrl: `${SITE_URL}/ar/services/`,
    content: arServicesDirectoryContent,
    assetPrefix: '../../'
  }));

  // Individual Service Pages (EN & AR)
  services.forEach(s => {
    // EN Service Page
    const enContent = `
      <div class="page-hero">
        <div class="container">
          <div class="breadcrumbs">
            <a href="../../en/">Home</a> <span>/</span> <a href="./">Services</a> <span>/</span> <span>${s.titleEn}</span>
          </div>
          <h1 class="section-title">${s.titleEn}</h1>
          <p class="section-desc" style="color:rgba(255,255,255,0.88); max-width:720px; margin:0 auto;">
            ${s.shortDescEn}
          </p>
          <div style="margin-top:2rem;">
            <a href="../../en/#contact" class="btn btn-primary btn-lg">
              <span>Discuss Your Requirements</span>
              ${iconArrowRight}
            </a>
          </div>
        </div>
      </div>

      <div class="section section-white">
        <div class="container service-detail-grid">
          <div class="content-article">
            <h2>Business Problems We Solve</h2>
            <p>Operating without specialized strategic execution leads to wasted marketing budgets and missed revenue opportunities. Here are the core challenges our ${s.titleEn} service systematically resolves:</p>
            <ul>
              ${s.problemsEn.map(p => `<li><strong>${p}</strong></li>`).join('')}
            </ul>

            <h2>Our Execution Methodology</h2>
            <p>We deploy a rigorous 4-step framework engineered for sustained performance, measurable accountability, and compound organic ROI:</p>
            <div style="display:flex; flex-direction:column; gap:1.25rem; margin:1.5rem 0;">
              ${s.methodologyEn.map(m => `
                <div style="background:var(--bg-page); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1.25rem;">
                  <h3 style="margin-top:0; margin-bottom:0.35rem; font-size:1.15rem; color:var(--primary);">${m.step}</h3>
                  <p style="margin-bottom:0; color:var(--text-muted); font-size:0.95rem;">${m.desc}</p>
                </div>
              `).join('')}
            </div>

            <h2>Commercial Benefits & Growth Impact</h2>
            <p>Investing in high-standard ${s.titleEn} creates enduring commercial advantages for your organization:</p>
            <ul>
              ${s.benefitsEn.map(b => `<li>${b}</li>`).join('')}
            </ul>

            <h2>Frequently Asked Questions</h2>
            <div class="faq-list">
              ${s.faqsEn.map((f, i) => `
                <div class="faq-item ${i === 0 ? 'open' : ''}">
                  <div class="faq-question">
                    <span>${f.q}</span>
                    <span class="faq-toggle-icon">▼</span>
                  </div>
                  <div class="faq-answer">${f.a}</div>
                </div>
              `).join('')}
            </div>

            <div style="margin-top:3.5rem; background:linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); color:#FFFFFF; border-radius:var(--radius-xl); padding:2.5rem; text-align:center;">
              <h3 style="color:#FFFFFF; font-size:1.75rem; margin-bottom:1rem;">Ready to Accelerate Your ${s.titleEn}?</h3>
              <p style="color:rgba(255,255,255,0.85); max-width:600px; margin:0 auto 1.75rem;">
                Schedule a consultation with our digital marketing strategists to analyze your current baseline and plan your growth trajectory.
              </p>
              <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
                <a href="../../en/#contact" class="btn btn-primary btn-lg">
                  <span>Request a Proposal</span>
                  ${iconArrowRight}
                </a>
                <a href="https://wa.me/${PHONE_RAW}" class="btn btn-whatsapp btn-lg js-whatsapp-link">
                  ${iconWhatsApp} <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Service Sidebar -->
          <aside>
            <div style="position:sticky; top:90px; display:flex; flex-direction:column; gap:1.5rem;">
              <div style="background:var(--bg-page); border:1px solid var(--border-color); border-radius:var(--radius-lg); padding:1.5rem;">
                <h4 style="font-size:1.1rem; font-weight:700; margin-bottom:1rem; color:var(--primary);">All Core Services</h4>
                <div style="display:flex; flex-direction:column; gap:0.5rem;">
                  ${services.map(other => `
                    <a href="${other.slug}.html" style="font-size:0.875rem; font-weight:${other.slug === s.slug ? '700' : '500'}; color:${other.slug === s.slug ? 'var(--accent-hover)' : 'var(--text-muted)'}; padding:0.4rem 0.6rem; border-radius:var(--radius-sm); background:${other.slug === s.slug ? 'rgba(231,185,79,0.15)' : 'transparent'};">
                      ${other.titleEn}
                    </a>
                  `).join('')}
                </div>
              </div>

              <div style="background:var(--primary-dark); color:#FFFFFF; border-radius:var(--radius-lg); padding:1.5rem; text-align:center;">
                <div style="font-size:1.5rem; margin-bottom:0.5rem;">💬</div>
                <h4 style="color:#FFFFFF; font-size:1.1rem; margin-bottom:0.5rem;">Have Questions?</h4>
                <p style="font-size:0.875rem; color:rgba(255,255,255,0.75); margin-bottom:1.25rem;">Speak directly with our team on WhatsApp for immediate advice.</p>
                <a href="https://wa.me/${PHONE_RAW}" class="btn btn-whatsapp btn-full btn-sm js-whatsapp-link">
                  ${iconWhatsApp} Message Directly
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;

    const enSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": s.titleEn,
      "provider": {
        "@type": "ProfessionalService",
        "name": "NAFEER DIGITAL",
        "url": SITE_URL
      },
      "description": s.metaDescEn,
      "areaServed": "Worldwide"
    };

    fs.writeFileSync(`en/services/${s.slug}.html`, renderDocument({
      lang: 'en',
      title: s.metaTitleEn,
      description: s.metaDescEn,
      canonicalUrl: `${SITE_URL}/en/services/${s.slug}.html`,
      alternateEnUrl: `${SITE_URL}/en/services/${s.slug}.html`,
      alternateArUrl: `${SITE_URL}/ar/services/${s.slug}.html`,
      content: enContent,
      schemaJson: enSchema,
      assetPrefix: '../../'
    }));

    // AR Service Page
    const arContent = `
      <div class="page-hero">
        <div class="container">
          <div class="breadcrumbs">
            <a href="../../ar/">الرئيسية</a> <span>/</span> <a href="./">خدماتنا</a> <span>/</span> <span>${s.titleAr}</span>
          </div>
          <h1 class="section-title">${s.titleAr}</h1>
          <p class="section-desc" style="color:rgba(255,255,255,0.88); max-width:720px; margin:0 auto;">
            ${s.shortDescAr}
          </p>
          <div style="margin-top:2rem;">
            <a href="../../ar/#contact" class="btn btn-primary btn-lg">
              <span>ناقش متطلبات مشروعك معنا</span>
              ${iconArrowLeft}
            </a>
          </div>
        </div>
      </div>

      <div class="section section-white">
        <div class="container service-detail-grid">
          <div class="content-article">
            <h2>المشاكل والتحديات التي نعالجها</h2>
            <p>العمل بدون استراتيجية تسويقية متخصصة يؤدي إلى استنزاف الميزانيات وتفويت فرص بيع ضخمة؛ إليك أبرز التحديات التي تعالجها خدمة ${s.titleAr} بشكل منهجي وحاسم:</p>
            <ul>
              ${s.problemsAr.map(p => `<li><strong>${p}</strong></li>`).join('')}
            </ul>

            <h2>منهجية العمل وخطوات التنفيذ</h2>
            <p>نعتمد خطة عمل محكمة من 4 مراحل تضمن تحقيق أعلى عائد استثماري وبناء أصول رقمية دائمة لشركتك:</p>
            <div style="display:flex; flex-direction:column; gap:1.25rem; margin:1.5rem 0;">
              ${s.methodologyAr.map(m => `
                <div style="background:var(--bg-page); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1.25rem;">
                  <h3 style="margin-top:0; margin-bottom:0.35rem; font-size:1.15rem; color:var(--primary);">${m.step}</h3>
                  <p style="margin-bottom:0; color:var(--text-muted); font-size:0.95rem;">${m.desc}</p>
                </div>
              `).join('')}
            </div>

            <h2>المزايا والعوائد التجارية لشركتك</h2>
            <p>الاستثمار الاحترافي في ${s.titleAr} يحقق لعلامتك التجارية مكاسب مستدامة وقابلة للقياس:</p>
            <ul>
              ${s.benefitsAr.map(b => `<li>${b}</li>`).join('')}
            </ul>

            <h2>الأسئلة الشائعة حول الخدمة</h2>
            <div class="faq-list">
              ${s.faqsAr.map((f, i) => `
                <div class="faq-item ${i === 0 ? 'open' : ''}">
                  <div class="faq-question">
                    <span>${f.q}</span>
                    <span class="faq-toggle-icon">▼</span>
                  </div>
                  <div class="faq-answer">${f.a}</div>
                </div>
              `).join('')}
            </div>

            <div style="margin-top:3.5rem; background:linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); color:#FFFFFF; border-radius:var(--radius-xl); padding:2.5rem; text-align:center;">
              <h3 style="color:#FFFFFF; font-size:1.75rem; margin-bottom:1rem;">هل ترغب في مضاعفة نتائجك عبر ${s.titleAr}؟</h3>
              <p style="color:rgba(255,255,255,0.85); max-width:600px; margin:0 auto 1.75rem;">
                تواصل مع مستشاري نفير الرقمي اليوم لمراجعة وضع موقعك الحالي ووضع خطة انطلاق مخصصة لأهدافك.
              </p>
              <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
                <a href="../../ar/#contact" class="btn btn-primary btn-lg">
                  <span>طلب خطة وعرض سعر</span>
                  ${iconArrowLeft}
                </a>
                <a href="https://wa.me/${PHONE_RAW}" class="btn btn-whatsapp btn-lg js-whatsapp-link">
                  ${iconWhatsApp} <span>محادثة فورية عبر واتساب</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Arabic Service Sidebar -->
          <aside>
            <div style="position:sticky; top:90px; display:flex; flex-direction:column; gap:1.5rem;">
              <div style="background:var(--bg-page); border:1px solid var(--border-color); border-radius:var(--radius-lg); padding:1.5rem;">
                <h4 style="font-size:1.1rem; font-weight:700; margin-bottom:1rem; color:var(--primary);">كافة الخدمات المتاحة</h4>
                <div style="display:flex; flex-direction:column; gap:0.5rem;">
                  ${services.map(other => `
                    <a href="${other.slug}.html" style="font-size:0.875rem; font-weight:${other.slug === s.slug ? '700' : '500'}; color:${other.slug === s.slug ? 'var(--accent-hover)' : 'var(--text-muted)'}; padding:0.4rem 0.6rem; border-radius:var(--radius-sm); background:${other.slug === s.slug ? 'rgba(231,185,79,0.15)' : 'transparent'};">
                      ${other.titleAr}
                    </a>
                  `).join('')}
                </div>
              </div>

              <div style="background:var(--primary-dark); color:#FFFFFF; border-radius:var(--radius-lg); padding:1.5rem; text-align:center;">
                <div style="font-size:1.5rem; margin-bottom:0.5rem;">💬</div>
                <h4 style="color:#FFFFFF; font-size:1.1rem; margin-bottom:0.5rem;">هل لديك استفسار محدد؟</h4>
                <p style="font-size:0.875rem; color:rgba(255,255,255,0.75); margin-bottom:1.25rem;">تحدّث مباشرة مع فريقنا عبر واتساب للحصول على إجابات فورية.</p>
                <a href="https://wa.me/${PHONE_RAW}" class="btn btn-whatsapp btn-full btn-sm js-whatsapp-link">
                  ${iconWhatsApp} محادثة مباشرة
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;

    const arSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": s.titleAr,
      "provider": {
        "@type": "ProfessionalService",
        "name": "نفير الرقمي",
        "url": `${SITE_URL}/ar/`
      },
      "description": s.metaDescAr,
      "areaServed": "Worldwide"
    };

    fs.writeFileSync(`ar/services/${s.slug}.html`, renderDocument({
      lang: 'ar',
      title: s.metaTitleAr,
      description: s.metaDescAr,
      canonicalUrl: `${SITE_URL}/ar/services/${s.slug}.html`,
      alternateEnUrl: `${SITE_URL}/en/services/${s.slug}.html`,
      alternateArUrl: `${SITE_URL}/ar/services/${s.slug}.html`,
      content: arContent,
      schemaJson: arSchema,
      assetPrefix: '../../'
    }));
  });

  console.log('✓ All 11 Service Pages generated in English & Arabic.');
}

// --------------------------------------------------------------------------
// 4. BUILD ALL 13 BLOG ARTICLES + BLOG HUBS (EN & AR)
// --------------------------------------------------------------------------
function buildBlogPages() {
  console.log('Generating Blog Pages...');

  // EN Blog Hub
  const enBlogHubContent = `
    <div class="page-hero">
      <div class="container">
        <div class="breadcrumbs">
          <a href="../">Home</a> <span>/</span> <span>Blog</span>
        </div>
        <h1 class="section-title">Digital Marketing Insights & Strategy</h1>
        <p class="section-desc" style="color:rgba(255,255,255,0.85); max-width:680px; margin:0 auto;">
          Actionable frameworks, search engine analysis, and growth playbooks published by the NAFEER DIGITAL team.
        </p>
      </div>
    </div>
    <div class="section section-white">
      <div class="container">
        <div class="blog-grid">
          ${blogs.map(b => `
            <div class="blog-card">
              <div class="blog-thumb-wrap">
                <div class="blog-thumb-icon">📰</div>
              </div>
              <div class="blog-body">
                <div class="blog-meta">
                  <span class="blog-category">${b.categoryEn}</span>
                  <span>•</span>
                  <span>${b.readTimeEn}</span>
                </div>
                <h2 class="blog-title">
                  <a href="${b.slug}.html">${b.titleEn}</a>
                </h2>
                <p class="blog-excerpt">${b.excerptEn}</p>
                <a href="${b.slug}.html" class="blog-read-more">
                  <span>Read Full Article</span>
                  ${iconArrowRight}
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  fs.writeFileSync('en/blog/index.html', renderDocument({
    lang: 'en',
    title: 'Digital Marketing Blog & Growth Guides | NAFEER DIGITAL',
    description: 'Read in-depth guides and articles on SEO, B2B lead generation, paid media optimization, and marketing analytics by NAFEER DIGITAL.',
    canonicalUrl: `${SITE_URL}/en/blog/`,
    alternateEnUrl: `${SITE_URL}/en/blog/`,
    alternateArUrl: `${SITE_URL}/ar/blog/`,
    content: enBlogHubContent,
    assetPrefix: '../../'
  }));

  // AR Blog Hub
  const arBlogHubContent = `
    <div class="page-hero">
      <div class="container">
        <div class="breadcrumbs">
          <a href="../">الرئيسية</a> <span>/</span> <span>المدونة</span>
        </div>
        <h1 class="section-title">مركز المعرفة والمدونة التسويقية</h1>
        <p class="section-desc" style="color:rgba(255,255,255,0.85); max-width:680px; margin:0 auto;">
          مقالات رصينة وأدلة تطبيقية متخصصة في السيو ونمو الأعمال واستراتيجيات التسويق الرقمي الحديثة من نفير الرقمي.
        </p>
      </div>
    </div>
    <div class="section section-white">
      <div class="container">
        <div class="blog-grid">
          ${blogs.map(b => `
            <div class="blog-card">
              <div class="blog-thumb-wrap">
                <div class="blog-thumb-icon">📰</div>
              </div>
              <div class="blog-body">
                <div class="blog-meta">
                  <span class="blog-category">${b.categoryAr}</span>
                  <span>•</span>
                  <span>${b.readTimeAr}</span>
                </div>
                <h2 class="blog-title">
                  <a href="${b.slug}.html">${b.titleAr}</a>
                </h2>
                <p class="blog-excerpt">${b.excerptAr}</p>
                <a href="${b.slug}.html" class="blog-read-more">
                  <span>اقرأ المقال كاملاً</span>
                  ${iconArrowLeft}
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  fs.writeFileSync('ar/blog/index.html', renderDocument({
    lang: 'ar',
    title: 'مدونة التسويق الرقمي واستراتيجيات النمو | نفير الرقمي',
    description: 'مقالات تحليليّة وأدلة شاملة في تحسين محركات البحث، وتوليد العملاء للشركات B2B، واستراتيجيات الإعلانات الممولة من نفير الرقمي.',
    canonicalUrl: `${SITE_URL}/ar/blog/`,
    alternateEnUrl: `${SITE_URL}/en/blog/`,
    alternateArUrl: `${SITE_URL}/ar/blog/`,
    content: arBlogHubContent,
    assetPrefix: '../../'
  }));

  // Individual Blog Articles (EN & AR)
  blogs.forEach(b => {
    // EN Blog Article
    const enArticleContent = `
      <div class="page-hero" style="text-align:start;">
        <div class="container" style="max-width:860px;">
          <div class="breadcrumbs">
            <a href="../../en/">Home</a> <span>/</span> <a href="./">Blog</a> <span>/</span> <span>${b.categoryEn}</span>
          </div>
          <div class="section-tag" style="margin-bottom:0.75rem;">${b.categoryEn} • ${b.readTimeEn}</div>
          <h1 class="section-title" style="font-size:clamp(1.85rem, 3.5vw, 2.75rem);">${b.titleEn}</h1>
          <p class="section-desc" style="color:rgba(255,255,255,0.85);">
            Published by <strong>NAFEER DIGITAL Editorial Team</strong> • Updated for 2026/2027 Strategic Planning
          </p>
        </div>
      </div>

      <div class="section section-white">
        <div class="container" style="max-width:860px;">
          <article class="content-article">
            ${b.contentHtmlEn}

            ${b.faqsEn && b.faqsEn.length > 0 ? `
              <h2 style="margin-top:3rem;">Frequently Asked Questions</h2>
              <div class="faq-list">
                ${b.faqsEn.map((f, i) => `
                  <div class="faq-item ${i === 0 ? 'open' : ''}">
                    <div class="faq-question">
                      <span>${f.q}</span>
                      <span class="faq-toggle-icon">▼</span>
                    </div>
                    <div class="faq-answer">${f.a}</div>
                  </div>
                `).join('')}
              </div>
            ` : ''}

            <div style="margin-top:4rem; border-top:1px solid var(--border-color); padding-top:2.5rem; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1.25rem;">
              <div>
                <span style="font-weight:700; color:var(--primary);">Share this insight:</span>
                <span style="color:var(--text-muted); font-size:0.875rem; margin-inline-start:0.5rem;">LinkedIn • Twitter • WhatsApp</span>
              </div>
              <a href="./" class="btn btn-outline btn-sm">
                <span>Back to All Articles</span>
              </a>
            </div>

            <!-- Author Box -->
            <div style="margin-top:2.5rem; background:var(--bg-subtle); border-radius:var(--radius-lg); padding:1.75rem; display:flex; align-items:center; gap:1.25rem;">
              <div style="width:56px; height:56px; border-radius:50%; background:var(--primary); color:#FFF; display:flex; align-items:center; justify-content:center; font-size:1.5rem; flex-shrink:0;">
                ✍️
              </div>
              <div>
                <h4 style="margin-bottom:0.25rem; font-size:1.05rem; font-weight:800;">NAFEER DIGITAL Strategic Research Team</h4>
                <p style="margin-bottom:0; font-size:0.875rem; color:var(--text-muted);">
                  Our research group develops data-backed growth frameworks, technical search engine audits, and commercial lead generation architectures for businesses in Malaysia and international markets.
                </p>
              </div>
            </div>

            <!-- In-Article Lead CTA -->
            <div style="margin-top:3rem; background:linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); color:#FFFFFF; border-radius:var(--radius-xl); padding:2.5rem; text-align:center;">
              <h3 style="color:#FFFFFF; font-size:1.6rem; margin-bottom:0.75rem;">Put This Strategy Into Action</h3>
              <p style="color:rgba(255,255,255,0.85); max-width:580px; margin:0 auto 1.5rem; font-size:0.95rem;">
                Looking to implement high-converting SEO and data-driven marketing for your brand? Speak directly with our lead strategist.
              </p>
              <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
                <a href="../../en/#contact" class="btn btn-primary btn-lg">
                  <span>Discuss Your Project</span>
                  ${iconArrowRight}
                </a>
                <a href="https://wa.me/${PHONE_RAW}" class="btn btn-whatsapp btn-lg js-whatsapp-link">
                  ${iconWhatsApp} <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    `;

    const enSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": b.titleEn,
      "description": b.metaDescEn,
      "author": {
        "@type": "Organization",
        "name": "NAFEER DIGITAL",
        "url": SITE_URL
      },
      "publisher": {
        "@type": "Organization",
        "name": "NAFEER DIGITAL",
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/assets/images/logo.jpg`
        }
      },
      "datePublished": "2026-11-01",
      "dateModified": "2026-11-15",
      "mainEntityOfPage": `${SITE_URL}/en/blog/${b.slug}.html`
    };

    fs.writeFileSync(`en/blog/${b.slug}.html`, renderDocument({
      lang: 'en',
      title: b.metaTitleEn,
      description: b.metaDescEn,
      canonicalUrl: `${SITE_URL}/en/blog/${b.slug}.html`,
      alternateEnUrl: `${SITE_URL}/en/blog/${b.slug}.html`,
      alternateArUrl: `${SITE_URL}/ar/blog/${b.slug}.html`,
      content: enArticleContent,
      schemaJson: enSchema,
      assetPrefix: '../../'
    }));

    // AR Blog Article
    const arArticleContent = `
      <div class="page-hero" style="text-align:start;">
        <div class="container" style="max-width:860px;">
          <div class="breadcrumbs">
            <a href="../../ar/">الرئيسية</a> <span>/</span> <a href="./">المدونة</a> <span>/</span> <span>${b.categoryAr}</span>
          </div>
          <div class="section-tag" style="margin-bottom:0.75rem;">${b.categoryAr} • ${b.readTimeAr}</div>
          <h1 class="section-title" style="font-size:clamp(1.85rem, 3.5vw, 2.75rem);">${b.titleAr}</h1>
          <p class="section-desc" style="color:rgba(255,255,255,0.85);">
            نشر بواسطة <strong>فريق التحرير في نفير الرقمي</strong> • تم التحديث لخطط النمو والتسويق لعام 2026/2027
          </p>
        </div>
      </div>

      <div class="section section-white">
        <div class="container" style="max-width:860px;">
          <article class="content-article">
            ${b.contentHtmlAr}

            ${b.faqsAr && b.faqsAr.length > 0 ? `
              <h2 style="margin-top:3rem;">الأسئلة الشائعة</h2>
              <div class="faq-list">
                ${b.faqsAr.map((f, i) => `
                  <div class="faq-item ${i === 0 ? 'open' : ''}">
                    <div class="faq-question">
                      <span>${f.q}</span>
                      <span class="faq-toggle-icon">▼</span>
                    </div>
                    <div class="faq-answer">${f.a}</div>
                  </div>
                `).join('')}
              </div>
            ` : ''}

            <div style="margin-top:4rem; border-top:1px solid var(--border-color); padding-top:2.5rem; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1.25rem;">
              <div>
                <span style="font-weight:700; color:var(--primary);">مشاركة المقال:</span>
                <span style="color:var(--text-muted); font-size:0.875rem; margin-inline-start:0.5rem;">LinkedIn • Twitter • WhatsApp</span>
              </div>
              <a href="./" class="btn btn-outline btn-sm">
                <span>العودة لكافة المقالات</span>
              </a>
            </div>

            <!-- Arabic Author Box -->
            <div style="margin-top:2.5rem; background:var(--bg-subtle); border-radius:var(--radius-lg); padding:1.75rem; display:flex; align-items:center; gap:1.25rem;">
              <div style="width:56px; height:56px; border-radius:50%; background:var(--primary); color:#FFF; display:flex; align-items:center; justify-content:center; font-size:1.5rem; flex-shrink:0;">
                ✍️
              </div>
              <div>
                <h4 style="margin-bottom:0.25rem; font-size:1.05rem; font-weight:800;">فريق البحوث الاستراتيجية في نفير الرقمي</h4>
                <p style="margin-bottom:0; font-size:0.875rem; color:var(--text-muted);">
                  نطور أطراً تسويقية قائمة على الأرقام الدقيقة وتحليلات السيو وبناء مسارات توليد صفقات الشركات في ماليزيا والأسواق الدولية.
                </p>
              </div>
            </div>

            <!-- Arabic In-Article Lead CTA -->
            <div style="margin-top:3rem; background:linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); color:#FFFFFF; border-radius:var(--radius-xl); padding:2.5rem; text-align:center;">
              <h3 style="color:#FFFFFF; font-size:1.6rem; margin-bottom:0.75rem;">طبّق هذه الاستراتيجية في نمو نشاطك التجاري</h3>
              <p style="color:rgba(255,255,255,0.85); max-width:580px; margin:0 auto 1.5rem; font-size:0.95rem;">
                هل ترغب في بناء منظومة تسويق رقمي تضمن تصدرك لمحركات البحث ومضاعفة مبيعاتك؟ تحدث مع خبيرنا الاستراتيجي اليوم.
              </p>
              <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
                <a href="../../ar/#contact" class="btn btn-primary btn-lg">
                  <span>دعنا نناقش مشروعك</span>
                  ${iconArrowLeft}
                </a>
                <a href="https://wa.me/${PHONE_RAW}" class="btn btn-whatsapp btn-lg js-whatsapp-link">
                  ${iconWhatsApp} <span>تواصل فوري عبر واتساب</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    `;

    const arSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": b.titleAr,
      "description": b.metaDescAr,
      "author": {
        "@type": "Organization",
        "name": "نفير الرقمي",
        "url": `${SITE_URL}/ar/`
      },
      "publisher": {
        "@type": "Organization",
        "name": "نفير الرقمي",
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/assets/images/logo.jpg`
        }
      },
      "datePublished": "2026-11-01",
      "dateModified": "2026-11-15",
      "mainEntityOfPage": `${SITE_URL}/ar/blog/${b.slug}.html`
    };

    fs.writeFileSync(`ar/blog/${b.slug}.html`, renderDocument({
      lang: 'ar',
      title: b.metaTitleAr,
      description: b.metaDescAr,
      canonicalUrl: `${SITE_URL}/ar/blog/${b.slug}.html`,
      alternateEnUrl: `${SITE_URL}/en/blog/${b.slug}.html`,
      alternateArUrl: `${SITE_URL}/ar/blog/${b.slug}.html`,
      content: arArticleContent,
      schemaJson: arSchema,
      assetPrefix: '../../'
    }));
  });

  console.log('✓ All 13 Blog Articles generated in English & Arabic.');
}

// --------------------------------------------------------------------------
// 5. BUILD SITEMAP.XML & ROBOTS.TXT & VERCEL.JSON
// --------------------------------------------------------------------------
function buildSitemapAndRobots() {
  console.log('Generating sitemap.xml and robots.txt...');

  const now = new Date().toISOString().split('T')[0];

  const urls = [
    { loc: `${SITE_URL}/`, en: `${SITE_URL}/en/`, ar: `${SITE_URL}/ar/`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${SITE_URL}/en/`, en: `${SITE_URL}/en/`, ar: `${SITE_URL}/ar/`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${SITE_URL}/ar/`, en: `${SITE_URL}/en/`, ar: `${SITE_URL}/ar/`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${SITE_URL}/en/services/`, en: `${SITE_URL}/en/services/`, ar: `${SITE_URL}/ar/services/`, priority: '0.9', changefreq: 'monthly' },
    { loc: `${SITE_URL}/ar/services/`, en: `${SITE_URL}/en/services/`, ar: `${SITE_URL}/ar/services/`, priority: '0.9', changefreq: 'monthly' },
    { loc: `${SITE_URL}/en/blog/`, en: `${SITE_URL}/en/blog/`, ar: `${SITE_URL}/ar/blog/`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${SITE_URL}/ar/blog/`, en: `${SITE_URL}/en/blog/`, ar: `${SITE_URL}/ar/blog/`, priority: '0.8', changefreq: 'weekly' }
  ];

  services.forEach(s => {
    urls.push({
      loc: `${SITE_URL}/en/services/${s.slug}.html`,
      en: `${SITE_URL}/en/services/${s.slug}.html`,
      ar: `${SITE_URL}/ar/services/${s.slug}.html`,
      priority: '0.8',
      changefreq: 'monthly'
    });
    urls.push({
      loc: `${SITE_URL}/ar/services/${s.slug}.html`,
      en: `${SITE_URL}/en/services/${s.slug}.html`,
      ar: `${SITE_URL}/ar/services/${s.slug}.html`,
      priority: '0.8',
      changefreq: 'monthly'
    });
  });

  blogs.forEach(b => {
    urls.push({
      loc: `${SITE_URL}/en/blog/${b.slug}.html`,
      en: `${SITE_URL}/en/blog/${b.slug}.html`,
      ar: `${SITE_URL}/ar/blog/${b.slug}.html`,
      priority: '0.7',
      changefreq: 'monthly'
    });
    urls.push({
      loc: `${SITE_URL}/ar/blog/${b.slug}.html`,
      en: `${SITE_URL}/en/blog/${b.slug}.html`,
      ar: `${SITE_URL}/ar/blog/${b.slug}.html`,
      priority: '0.7',
      changefreq: 'monthly'
    });
  });

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${u.en}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${u.ar}" />
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync('sitemap.xml', sitemapXml);

  const robotsTxt = `# NAFEER DIGITAL | نفير الرقمي
User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
  fs.writeFileSync('robots.txt', robotsTxt);

  const vercelJson = {
    "cleanUrls": true,
    "trailingSlash": true,
    "headers": [
      {
        "source": "/(.*)",
        "headers": [
          { "key": "X-Content-Type-Options", "value": "nosniff" },
          { "key": "X-Frame-Options", "value": "DENY" },
          { "key": "X-XSS-Protection", "value": "1; mode=block" }
        ]
      },
      {
        "source": "/assets/(.*)",
        "headers": [
          { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
        ]
      }
    ]
  };
  fs.writeFileSync('vercel.json', JSON.stringify(vercelJson, null, 2));

  console.log('✓ sitemap.xml, robots.txt, vercel.json generated successfully.');
}

// --------------------------------------------------------------------------
// MAIN EXECUTION
// --------------------------------------------------------------------------
try {
  buildHomepages();
  buildServicePages();
  buildBlogPages();
  buildSitemapAndRobots();
  console.log('🎉 ALL PAGES SUCCESSFULLY GENERATED!');
} catch (err) {
  console.error('Error generating pages:', err);
  process.exit(1);
}
