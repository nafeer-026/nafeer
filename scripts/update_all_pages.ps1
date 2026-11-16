# Update script for all 48 subpages: 11 EN Services, 11 AR Services, 13 EN Blog, 13 AR Blog
$ErrorActionPreference = "Stop"

$footerEN = @'
  <!-- Floating WhatsApp Action -->
  <div class="floating-actions">
    <a href="https://wa.me/601170066150" class="floating-btn floating-whatsapp js-whatsapp-link" title="Chat on WhatsApp" aria-label="WhatsApp">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.51-6.17c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.13-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/></svg>
    </a>
  </div>

  <!-- Site Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top-grid">
        <div>
          <div class="brand-logo-wrap" style="margin-bottom: 1.25rem;">
            <img src="../../assets/images/logo-icon.png" alt="NAFEER DIGITAL" class="brand-logo-img" width="44" height="44">
            <span class="brand-name">NAFEER DIGITAL</span>
          </div>
          <p class="footer-brand-desc">
            A premier international digital marketing agency engineering durable search authority, high-converting platforms, and predictable commercial revenue streams.
          </p>
          <a href="https://wa.me/601170066150" class="btn btn-whatsapp btn-sm js-whatsapp-link">
            <span>Direct WhatsApp: +60 11 7006 6150</span>
          </a>
        </div>

        <div>
          <h4 class="footer-col-title">Navigation</h4>
          <ul class="footer-links-list">
            <li><a href="../../" class="footer-link">Home</a></li>
            <li><a href="../../#about" class="footer-link">About NAFEER DIGITAL</a></li>
            <li><a href="../../en/services/" class="footer-link">All Services</a></li>
            <li><a href="../../#why-us" class="footer-link">Why Choose Us</a></li>
            <li><a href="../../#work" class="footer-link">Case Studies & Work</a></li>
            <li><a href="../../en/blog/" class="footer-link">Insights & Blog</a></li>
            <li><a href="../../#contact" class="footer-link">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-col-title">Services Directory</h4>
          <ul class="footer-links-list">
            <li><a href="../../en/services/seo.html" class="footer-link">SEO Services</a></li>
            <li><a href="../../en/services/technical-seo.html" class="footer-link">Technical SEO</a></li>
            <li><a href="../../en/services/local-seo.html" class="footer-link">Local SEO</a></li>
            <li><a href="../../en/services/b2b-lead-generation.html" class="footer-link">B2B Lead Generation</a></li>
            <li><a href="../../en/services/google-ads.html" class="footer-link">Google Ads</a></li>
            <li><a href="../../en/services/content-marketing.html" class="footer-link">Content Marketing</a></li>
            <li><a href="../../en/services/website-design-development.html" class="footer-link">Web Design & Dev</a></li>
            <li><a href="../../en/services/marketing-analytics.html" class="footer-link">Marketing Analytics</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-col-title">Strategic Enquiries</h4>
          <p style="font-size:0.9rem; color:var(--text-inverse-muted); margin-bottom: 0.85rem; line-height: 1.6;">
            Email: <a href="mailto:nafeerdigital@gmail.com" style="color:var(--color-gold);">nafeerdigital@gmail.com</a>
          </p>
          <p style="font-size:0.9rem; color:var(--text-inverse-muted); margin-bottom: 1.25rem; line-height: 1.6;">
            WhatsApp: <a href="https://wa.me/601170066150" class="js-whatsapp-link" style="color:var(--color-gold);">+60 11 7006 6150</a>
          </p>
          <p style="font-size:0.825rem; color:var(--text-light); line-height: 1.5;">
            Serving enterprise clients across Malaysia, the Middle East, and worldwide markets.
          </p>
        </div>
      </div>

      <div class="footer-bottom-bar">
        <div>
          © 2026 NAFEER DIGITAL. All rights reserved. Professional Digital Marketing Agency.
        </div>
        <div style="display:flex; gap:1.5rem; align-items:center;">
          <a href="#" class="js-switch-lang" data-target-lang="ar" style="color:var(--color-gold);">العربية</a>
          <span>•</span>
          <a href="../../sitemap.xml" target="_blank" style="color:var(--text-light);">XML Sitemap</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Core JavaScript -->
  <script src="../../assets/js/main.js"></script>
</body>
</html>
'@

$footerAR = @'
  <!-- Floating WhatsApp Action -->
  <div class="floating-actions">
    <a href="https://wa.me/601170066150" class="floating-btn floating-whatsapp js-whatsapp-link" title="محادثة عبر واتساب" aria-label="واتساب">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.51-6.17c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.13-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/></svg>
    </a>
  </div>

  <!-- Site Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top-grid">
        <div>
          <div class="brand-logo-wrap" style="margin-bottom: 1.25rem;">
            <img src="../../assets/images/logo-icon.png" alt="نفير الرقمي" class="brand-logo-img" width="44" height="44">
            <span class="brand-name">نفير الرقمي</span>
          </div>
          <p class="footer-brand-desc">
            وكالة تسويق رقمي دولية رائدة؛ نؤسس حضوراً دائماً ومسيطراً في محركات البحث، ونطور منصات رقمية عالية التحويل، ونبني مسارات إيرادات مستدامة للشركات والمصانع الطموحة.
          </p>
          <a href="https://wa.me/601170066150" class="btn btn-whatsapp btn-sm js-whatsapp-link">
            <span>واتساب المباشر: 6150 7006 11 60+</span>
          </a>
        </div>

        <div>
          <h4 class="footer-col-title">روابط الموقع</h4>
          <ul class="footer-links-list">
            <li><a href="../../ar/" class="footer-link">الرئيسية</a></li>
            <li><a href="../../ar/#about" class="footer-link">من نحن وفلسفتنا</a></li>
            <li><a href="../../ar/services/" class="footer-link">خدماتنا الكاملة</a></li>
            <li><a href="../../ar/#why-us" class="footer-link">لماذا نفير الرقمي</a></li>
            <li><a href="../../ar/#work" class="footer-link">دراسات الحالة والأعمال</a></li>
            <li><a href="../../ar/blog/" class="footer-link">المدونة والتحليلات</a></li>
            <li><a href="../../ar/#contact" class="footer-link">طلب استشارة</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-col-title">دليل الخدمات</h4>
          <ul class="footer-links-list">
            <li><a href="../../ar/services/seo.html" class="footer-link">تحسين محركات البحث SEO</a></li>
            <li><a href="../../ar/services/technical-seo.html" class="footer-link">السيو التقني</a></li>
            <li><a href="../../ar/services/local-seo.html" class="footer-link">السيو المحلي للشركات</a></li>
            <li><a href="../../ar/services/b2b-lead-generation.html" class="footer-link">توليد صفقات الشركات B2B</a></li>
            <li><a href="../../ar/services/google-ads.html" class="footer-link">إعلانات جوجل المتقدمة</a></li>
            <li><a href="../../ar/services/content-marketing.html" class="footer-link">التسويق بالمحتوى الاستراتيجي</a></li>
            <li><a href="../../ar/services/website-design-development.html" class="footer-link">تصميم وتطوير المواقع</a></li>
            <li><a href="../../ar/services/marketing-analytics.html" class="footer-link">تحليلات الأداء ولوحات البيانات</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-col-title">استفسارات استراتيجية</h4>
          <p style="font-size:0.9rem; color:var(--text-inverse-muted); margin-bottom: 0.85rem; line-height: 1.6;">
            البريد الإلكتروني: <a href="mailto:nafeerdigital@gmail.com" style="color:var(--color-gold);">nafeerdigital@gmail.com</a>
          </p>
          <p style="font-size:0.9rem; color:var(--text-inverse-muted); margin-bottom: 1.25rem; line-height: 1.6;">
            واتساب الإدارة: <a href="https://wa.me/601170066150" class="js-whatsapp-link" style="color:var(--color-gold);">6150 7006 11 60+</a>
          </p>
          <p style="font-size:0.825rem; color:var(--text-light); line-height: 1.5;">
            نخدم عملاءنا من الشركات الكبرى والمؤسسات في ماليزيا ومنطقة الشرق الأوسط والأسواق العالمية.
          </p>
        </div>
      </div>

      <div class="footer-bottom-bar">
        <div>
          © 2026 نفير الرقمي. جميع الحقوق محفوظة. وكالة تسويق رقمي متكاملة.
        </div>
        <div style="display:flex; gap:1.5rem; align-items:center;">
          <a href="#" class="js-switch-lang" data-target-lang="en" style="color:var(--color-gold);">English</a>
          <span>•</span>
          <a href="../../sitemap.xml" target="_blank" style="color:var(--text-light);">خريطة الموقع XML</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Core JavaScript -->
  <script src="../../assets/js/main.js"></script>
</body>
</html>
'@

function Process-Subpage {
    param (
        [string]$filePath,
        [bool]$isArabic
    )

    $html = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)

    # 1. Add Favicon if missing
    if ($html -notmatch 'rel="icon"') {
        $html = $html -replace '(<link rel="stylesheet" href="\.\./\.\./assets/css/main\.css">)', "`$1`n  <!-- Favicon -->`n  <link rel=`"icon`" type=`"image/png`" href=`"../../assets/images/favicon.png`">"
    }

    # 2. Update brand logo src to logo-icon.png
    $html = $html -replace '<img src="\.\./\.\./assets/images/logo\.jpg" alt="([^"]+)" class="brand-logo-img"', '<img src="../../assets/images/logo-icon.png" alt="$1" class="brand-logo-img"'

    # 3. Clean Header Actions (remove theme button)
    if ($isArabic) {
        $headerActionsPattern = '(?s)<!-- Header Actions -->.*?<div class="header-actions">.*?</div>\s*</div>\s*</header>'
        $cleanHeaderActions = @'
      <!-- Header Actions -->
      <div class="header-actions">
        <!-- Language Switcher Button -->
        <a href="#" class="lang-switch-btn js-switch-lang" data-target-lang="en" title="Switch to English">
          <span>English</span>
        </a>

        <!-- Header CTA -->
        <a href="../../ar/#contact" class="btn btn-primary btn-sm" style="display:none; @media(min-width:640px){display:inline-flex;}">
          ابدأ الآن
        </a>

        <!-- Mobile Hamburger Trigger -->
        <button type="button" class="hamburger-btn" id="btn-hamburger" aria-label="القائمة">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>
  </header>
'@
        $html = [System.Text.RegularExpressions.Regex]::Replace($html, $headerActionsPattern, $cleanHeaderActions)
    } else {
        $headerActionsPattern = '(?s)<!-- Header Actions -->.*?<div class="header-actions">.*?</div>\s*</div>\s*</header>'
        $cleanHeaderActions = @'
      <!-- Header Actions -->
      <div class="header-actions">
        <!-- Language Switcher Button -->
        <a href="#" class="lang-switch-btn js-switch-lang" data-target-lang="ar" title="التحويل إلى العربية">
          <span>العربية</span>
        </a>

        <!-- Header CTA -->
        <a href="../../#contact" class="btn btn-primary btn-sm" style="display:none; @media(min-width:640px){display:inline-flex;}">
          Get in Touch
        </a>

        <!-- Mobile Hamburger Trigger -->
        <button type="button" class="hamburger-btn" id="btn-hamburger" aria-label="Open Navigation Menu">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>
  </header>
'@
        $html = [System.Text.RegularExpressions.Regex]::Replace($html, $headerActionsPattern, $cleanHeaderActions)
    }

    # 4. Clean Mobile Drawer footer (remove theme button)
    if ($isArabic) {
        $drawerBottomPattern = '(?s)<div style="margin-top: auto; display: flex; flex-direction: column; gap: 0\.75rem;">.*?</div>\s*</aside>'
        $cleanDrawerBottom = @'
    <div style="margin-top: auto; display: flex; flex-direction: column; gap: 0.85rem;">
      <a href="#" class="btn btn-secondary btn-full js-switch-lang" data-target-lang="en">
        التحويل إلى English
      </a>
      <a href="https://wa.me/601170066150" class="btn btn-whatsapp btn-full js-whatsapp-link">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.51-6.17c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.13-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/></svg> محادثة واتساب
      </a>
    </div>
  </aside>
'@
        $html = [System.Text.RegularExpressions.Regex]::Replace($html, $drawerBottomPattern, $cleanDrawerBottom)
    } else {
        $drawerBottomPattern = '(?s)<div style="margin-top: auto; display: flex; flex-direction: column; gap: 0\.75rem;">.*?</div>\s*</aside>'
        $cleanDrawerBottom = @'
    <div style="margin-top: auto; display: flex; flex-direction: column; gap: 0.85rem;">
      <a href="#" class="btn btn-secondary btn-full js-switch-lang" data-target-lang="ar">
        التحويل إلى العربية
      </a>
      <a href="https://wa.me/601170066150" class="btn btn-whatsapp btn-full js-whatsapp-link">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.51-6.17c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.13-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/></svg> Direct WhatsApp
      </a>
    </div>
  </aside>
'@
        $html = [System.Text.RegularExpressions.Regex]::Replace($html, $drawerBottomPattern, $cleanDrawerBottom)
    }

    # 5. Clean entire bottom section (from </main> or <!-- Floating Quick Actions --> to </html>)
    $bottomPattern = '(?s)(</main>).*$'
    $targetFooter = if ($isArabic) { $footerAR } else { $footerEN }
    $html = [System.Text.RegularExpressions.Regex]::Replace($html, $bottomPattern, "`$1`n`n" + $targetFooter)

    # 6. Safety check: remove any leftover personal founder email or names
    $html = $html -replace 'm\.alhadi\.alneel@gmail\.com', 'nafeerdigital@gmail.com'
    $html = $html -replace 'Mohamed Alhadi Alneel', 'NAFEER DIGITAL'

    [System.IO.File]::WriteAllText($filePath, $html, [System.Text.Encoding]::UTF8)
    Write-Host "Updated: $filePath"
}

# Execute on all 4 directories
Get-ChildItem -Path "en\services" -Filter "*.html" | Where-Object { $_.Name -ne "index.html" } | ForEach-Object {
    Process-Subpage -filePath $_.FullName -isArabic $false
}

Get-ChildItem -Path "ar\services" -Filter "*.html" | Where-Object { $_.Name -ne "index.html" } | ForEach-Object {
    Process-Subpage -filePath $_.FullName -isArabic $true
}

Get-ChildItem -Path "en\blog" -Filter "*.html" | Where-Object { $_.Name -ne "index.html" } | ForEach-Object {
    Process-Subpage -filePath $_.FullName -isArabic $false
}

Get-ChildItem -Path "ar\blog" -Filter "*.html" | Where-Object { $_.Name -ne "index.html" } | ForEach-Object {
    Process-Subpage -filePath $_.FullName -isArabic $true
}

Write-Host "ALL 48 SUBPAGES UPDATED SUCCESSFULLY!"
