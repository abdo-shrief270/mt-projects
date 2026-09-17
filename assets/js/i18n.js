/* =====================================================================
   MT-Company — lightweight bilingual (ar / en) engine.
   Static text carries data-i18n / data-i18n-ph / data-i18n-title.
   Dynamic content (catalog) reads getLang() + *_en data fields.
   Fires window event "mt:lang" on change so renderers can refresh.
   ===================================================================== */

const DICT = {
    /* ---- nav / footer ---- */
    "nav.home": ["الرئيسية", "Home"],
    "nav.services": ["خدماتنا", "Services"],
    "nav.projects": ["المشاريع", "Projects"],
    "nav.courses": ["الكورسات", "Courses"],
    "nav.about": ["من نحن", "About"],
    "nav.elv": ["التيار الخفيف", "Low-current"],
    "nav.software": ["حلول برمجية", "Software"],
    "nav.contactBtn": ["تواصل معنا", "Contact"],
    "foot.blurb": ["فريق هندسي وبرمجي ينفّذ مشاريع التخرّج، أنظمة التيار الخفيف، الحلول البرمجية، والكورسات العملية — للطلاب والشركات.", "An engineering & software team delivering graduation projects, low-current systems, software solutions, and hands-on courses — for students and businesses."],
    "foot.servicesTitle": ["خدماتنا", "Our Services"],
    "foot.projects": ["المشاريع الجاهزة", "Ready-made Projects"],
    "foot.elv": ["أنظمة التيار الخفيف", "Low-current Systems"],
    "foot.software": ["الحلول البرمجية", "Software Solutions"],
    "foot.courses": ["الكورسات التعليمية", "Courses"],
    "foot.about": ["من نحن", "About Us"],
    "foot.contactTitle": ["تواصل معنا", "Get in Touch"],
    "foot.wa": ["واتساب: ‎+20 112 830 4396", "WhatsApp: +20 112 830 4396"],
    "foot.fb": ["فيسبوك: MT-Company", "Facebook: MT-Company"],
    "foot.ig": ["انستجرام: mt_company40", "Instagram: mt_company40"],
    "foot.delivery": ["تسليم فوري بعد تأكيد الدفع", "Instant delivery after payment"],
    "foot.rights": ["جميع الحقوق محفوظة ©", "All rights reserved ©"],
    "foot.tagline": ["منصة المشاريع والكورسات الهندسية", "Engineering projects & courses"],

    /* ---- home ---- */
    "home.hero.kicker": ["حلول للشركات والمؤسسات", "Solutions for companies & businesses"],
    "home.hero.h1": ["أنظمة تيار خفيف وحلول برمجية لأعمالك", "Low-current systems & software for your business"],
    "home.hero.lead": ["نخدم الشركات والمؤسسات في تركيب أنظمة التيار الخفيف — كاميرات، شبكات، وإنذار حريق — وتطوير الحلول البرمجية من مواقع وتطبيقات وأنظمة إدارة، بجودة احترافية ودعم مستمر.", "We help companies and organizations install low-current systems — CCTV, networks, and fire alarm — and build software like websites, apps, and management systems, with professional quality and ongoing support."],
    "home.hero.cta1": ["اطلب عرض سعر", "Request a quote"],
    "home.hero.cta2": ["شاهد أعمالنا", "See our work"],
    "home.hero.tags": ["كاميرات ومراقبة · شبكات وداتا · إنذار حريق · <b>مواقع وتطبيقات</b> · أنظمة إدارة", "CCTV & security · Networks & data · Fire alarm · <b>Web & apps</b> · Management systems"],
    "stat.projects": ["مشروع منفّذ", "Projects delivered"],
    "stat.systems": ["نظام مُركّب", "Systems installed"],
    "stat.clients": ["عميل", "Clients"],
    "stat.courses": ["كورس تدريبي", "Training courses"],
    "stat.areas": ["مجالات خدمة", "Service areas"],
    "stat.software": ["مشروع برمجي", "Software projects"],
    "stat.support": ["دعم مستمر", "Ongoing support"],
    "home.services.kicker": ["خدماتنا", "Our services"],
    "home.services.h2": ["خدمتان أساسيتان لأعمالك", "Two core services for your business"],
    "home.services.p": ["نركّز على ما تحتاجه الشركات فعلاً: بنية تحتية للتيار الخفيف، وبرمجيات تدير أعمالك.", "We focus on what businesses actually need: low-current infrastructure and software that runs your operations."],
    "elv.work": ["نماذج من أعمالنا", "Samples of our work"],
    "sw.work": ["نماذج من أعمالنا", "Samples of our work"],
    "elv.g1": ["كاميرات مراقبة لمقر شركة", "CCTV for a company HQ"],
    "elv.g2": ["شبكة بيانات ورَفّ سيرفر", "Data network & server rack"],
    "elv.g3": ["تركيب وتمديد الأنظمة على الموقع", "On-site system installation"],
    "elv.g4": ["غرفة سيرفرات وشبكات", "Server & network room"],
    "sw.g1": ["لوحة تحكم وتحليلات", "Dashboard & analytics"],
    "sw.g2": ["تطبيق موبايل للطلبات", "Mobile ordering app"],
    "sw.g3": ["متجر إلكتروني متكامل", "Full e-commerce store"],
    "sw.g4": ["منصة ويب لإدارة الأعمال", "Web platform for operations"],
    "home.p1.title": ["مشاريع هندسية جاهزة", "Ready-made projects"],
    "home.p1.desc": ["مشاريع أردوينو وإنترنت الأشياء والروبوتات والذكاء الاصطناعي، تصلك بالكود والتوصيلات وشرح PDF.", "Arduino, IoT, robotics & AI projects, delivered with code, wiring, and a PDF guide."],
    "home.p1.more": ["تصفّح المشاريع", "Browse projects"],
    "home.p2.title": ["أنظمة التيار الخفيف", "Low-current systems"],
    "home.p2.desc": ["كاميرات مراقبة، شبكات، إنذار حريق، إنتركم وكنترول أكسس — توريد وتركيب وصيانة.", "CCTV, networks, fire alarm, intercom & access control — supply, install, maintain."],
    "home.p2.more": ["تفاصيل الأنظمة", "System details"],
    "home.p3.title": ["حلول برمجية Full-Stack", "Full-stack software"],
    "home.p3.desc": ["مواقع وتطبيقات موبايل ولوحات تحكم ومتاجر إلكترونية، من التصميم حتى النشر والصيانة.", "Websites, mobile apps, dashboards & online stores, from design to deployment."],
    "home.p3.more": ["ماذا نبرمج", "What we build"],
    "home.p4.title": ["كورسات تعليمية", "Courses"],
    "home.p4.desc": ["مسارات عملية بمستويات متدرّجة من الصفر للاحتراف، مع ملفات وتطبيقات وشهادة إتمام.", "Hands-on tracks from beginner to pro, with files, projects & a certificate."],
    "home.p4.more": ["شاهد الكورسات", "View courses"],

    /* ---- ELV ---- */
    "elv.kicker": ["التيار الخفيف", "Low-current"],
    "elv.h2": ["أنظمة التيار الخفيف للمنازل والشركات", "Low-current systems for homes & businesses"],
    "elv.p": ["نصمّم ونركّب أنظمة الحماية والاتصال لمنزلك أو مقرّ عملك، بمكوّنات أصلية وتنفيذ نظيف، مع صيانة ومتابعة بعد التركيب.", "We design and install security & communication systems for your home or workplace — genuine parts, clean workmanship, and post-install maintenance."],
    "elv.i1": ["كاميرات مراقبة CCTV وأنظمة تسجيل وأرشفة", "CCTV cameras with recording & archiving"],
    "elv.i2": ["شبكات الكمبيوتر والداتا والفايبر", "Computer, data & fiber networks"],
    "elv.i3": ["أنظمة إنذار ومكافحة الحريق", "Fire alarm & suppression systems"],
    "elv.i4": ["التحكم في الدخول والحضور والانصراف", "Access control & attendance"],
    "elv.i5": ["الإنتركم والاتصال الداخلي للمباني", "Intercom & building communication"],
    "elv.i6": ["أنظمة الصوت والإعلان الصوتي", "Sound & PA systems"],
    "elv.cta": ["اطلب معاينة", "Request a site visit"],
    "elv.s1": ["كاميرات المراقبة", "CCTV cameras"],
    "elv.s2": ["شبكات وداتا", "Networks & data"],
    "elv.s3": ["إنذار حريق", "Fire alarm"],
    "elv.s4": ["كنترول أكسس", "Access control"],
    "elv.s5": ["إنتركم واتصال", "Intercom"],
    "elv.s6": ["أنظمة صوت", "Sound systems"],

    /* ---- software ---- */
    "sw.kicker": ["برمجة", "Software"],
    "sw.h2": ["حلول برمجية متكاملة Full-Stack", "Complete full-stack software"],
    "sw.p": ["نبني برمجيات تخدم شغلك فعلاً — من الواجهة حتى قاعدة البيانات — بكود نظيف وقابل للتطوير، وتسليم على مراحل واضحة تشوف فيها التقدّم أولاً بأول.", "We build software that actually serves your business — from front-end to database — with clean, scalable code and clear milestones you can track."],
    "sw.i1": ["مواقع الشركات والمنصات والحجوزات", "Company sites, platforms & booking"],
    "sw.i2": ["تطبيقات الموبايل لأندرويد و iOS", "Mobile apps for Android & iOS"],
    "sw.i3": ["لوحات تحكم وأنظمة إدارة داخلية", "Dashboards & internal admin systems"],
    "sw.i4": ["متاجر إلكترونية وبوابات دفع", "Online stores & payment gateways"],
    "sw.i5": ["واجهات برمجية وتكاملات مع أنظمة أخرى", "APIs & integrations with other systems"],
    "sw.i6": ["استضافة ونشر وصيانة مستمرة", "Hosting, deployment & ongoing maintenance"],
    "sw.cta": ["ابدأ مشروعك", "Start your project"],
    "sw.s1": ["مواقع ومنصات", "Sites & platforms"],
    "sw.s2": ["تطبيقات موبايل", "Mobile apps"],
    "sw.s3": ["لوحات تحكم", "Dashboards"],
    "sw.s4": ["متاجر إلكترونية", "Online stores"],
    "sw.s5": ["واجهات APIs", "APIs"],
    "sw.s6": ["نشر واستضافة", "Deploy & host"],

    /* ---- featured / steps / cta ---- */
    "home.fp.kicker": ["جاهز للتسليم", "Ready to deliver"],
    "home.fp.h2": ["مشاريع مختارة من معملنا", "Selected projects from our lab"],
    "home.fp.btn": ["عرض كل المشاريع", "View all projects"],
    "home.fc.kicker": ["تعلّم بيدك", "Learn by doing"],
    "home.fc.h2": ["كورسات نبدأ فيها من الصفر", "Courses that start from zero"],
    "home.fc.btn": ["عرض كل الكورسات", "View all courses"],
    "steps.kicker": ["طريقة العمل", "How we work"],
    "steps.h2": ["أربع خطوات واضحة", "Four clear steps"],
    "steps.1t": ["تواصل واستشارة", "Reach out & consult"],
    "steps.1d": ["تحكي لنا فكرتك أو احتياجك، ونسألك الأسئلة الصح لنفهم المطلوب.", "Tell us your idea or need, and we ask the right questions."],
    "steps.2t": ["عرض سعر وخطة", "Quote & plan"],
    "steps.2d": ["نرسل لك عرضاً واضحاً بالتفاصيل والمدة والتكلفة قبل أي التزام.", "We send a clear quote with scope, timeline and cost before any commitment."],
    "steps.3t": ["تنفيذ ومتابعة", "Build & follow up"],
    "steps.3d": ["ننفّذ على مراحل وتتابع التقدّم معنا خطوة بخطوة.", "We build in stages and you track progress step by step."],
    "steps.4t": ["تسليم ودعم", "Deliver & support"],
    "steps.4d": ["نسلّم العمل كاملاً ونبقى معك للدعم والصيانة بعد التسليم.", "We hand over the full work and stay for support and maintenance."],
    "home.cta.h2": ["عندك مشروع أو نظام محتاج تنفيذ؟", "Have a project or system to build?"],
    "home.cta.p": ["سواء مشروع تخرّج، تركيب كاميرات وشبكة، أو موقع وتطبيق — احكِ لنا والباقي علينا.", "A graduation project, a camera & network install, or a website & app — tell us and leave the rest to us."],
    "home.cta.btn": ["ابدأ بالتواصل معنا", "Start by contacting us"],

    /* ---- projects page ---- */
    "proj.kicker": ["المشاريع الجاهزة", "Ready-made projects"],
    "proj.h1": ["مشاريع هندسية <span class=\"gold-text\">جاهزة للتسليم</span>", "Engineering projects <span class=\"gold-text\">ready to deliver</span>"],
    "proj.leadA": ["اختر مشروعك من بين", "Choose from"],
    "proj.leadB": ["مشروعاً متكاملاً — كل مشروع يشمل الكود المصدر، مخطط التوصيلات، وملف PDF بالشرح.", "complete projects — each includes source code, wiring diagram, and a PDF guide."],

    /* ---- courses page ---- */
    "crs.kicker": ["الكورسات التعليمية", "Courses"],
    "crs.h1": ["تعلّم الهندسة العملية <span class=\"gold-text\">بيدك</span>", "Learn practical engineering <span class=\"gold-text\">hands-on</span>"],
    "crs.leadA": ["اختر من بين", "Choose from"],
    "crs.leadB": ["كورساً عملياً يأخذك من الأساسيات إلى بناء مشاريعك الخاصة، مع فيديوهات وملفات وشهادة إتمام.", "hands-on courses that take you from the basics to building your own projects, with videos, files & a certificate."],

    /* ---- shared controls ---- */
    "ph.searchProjects": ["ابحث باسم المشروع أو التخصص (Arduino, IoT, AI...)", "Search by project name or field (Arduino, IoT, AI...)"],
    "ph.searchCourses": ["ابحث عن كورس (أردوينو، إنترنت الأشياء، PCB...)", "Search for a course (Arduino, IoT, PCB...)"],
    "filter.all": ["الكل", "All"],
    "filter.beginner": ["مبتدئ", "Beginner"],
    "filter.intermediate": ["متوسط", "Intermediate"],
    "filter.advanced": ["متقدم", "Advanced"],
    "sort.default": ["الترتيب الافتراضي", "Default order"],
    "sort.lowhigh": ["السعر: من الأقل للأعلى", "Price: low to high"],
    "sort.highlow": ["السعر: من الأعلى للأقل", "Price: high to low"],
    "common.loadmore": ["عرض المزيد", "Load more"],
    "faq.title": ["الأسئلة الشائعة", "Frequently asked questions"],

    /* ---- projects FAQ ---- */
    "proj.faq1q": ["كيف أستلم ملفات المشروع بعد الشراء؟", "How do I receive the project files after purchase?"],
    "proj.faq1a": ["بعد تأكيد الدفع عبر واتساب، نرسل لك رابطاً مباشراً يحتوي على ملفات المشروع كاملة (Code + Schematics + PDF) فوراً.", "After payment is confirmed on WhatsApp, we send you a direct link with the full project files (Code + Schematics + PDF) instantly."],
    "proj.faq2q": ["هل يشمل المشروع شرحاً لطريقة التشغيل؟", "Does the project include an operation guide?"],
    "proj.faq2a": ["نعم، كل مشروع يحتوي على ملف PDF موثّق يوضّح المكوّنات وطريقة التوصيل خطوة بخطوة مع شرح لعمل الكود.", "Yes, every project has a documented PDF explaining the components, step-by-step wiring, and how the code works."],
    "proj.faq3q": ["ما هي طرق الدفع المتاحة؟", "What payment methods are available?"],
    "proj.faq3a": ["نوفّر طرق دفع سريعة مثل فودافون كاش (Vodafone Cash) والحوالات البنكية المباشرة.", "We support fast options like Vodafone Cash and direct bank transfers."],
    "proj.faq4q": ["هل يمكن تعديل المشروع حسب متطلباتي؟", "Can the project be customized to my requirements?"],
    "proj.faq4a": ["بالتأكيد، نوفّر خدمة تخصيص المشاريع وتعديلها لتناسب متطلبات مشروعك أو دكتورك — تواصل معنا لمناقشة التفاصيل.", "Absolutely — we customize and adapt projects to match your requirements or your professor's. Contact us to discuss."],

    /* ---- courses FAQ ---- */
    "crs.faq1q": ["كيف ألتحق بالكورس بعد الاشتراك؟", "How do I access the course after enrolling?"],
    "crs.faq1a": ["بعد تأكيد الاشتراك عبر واتساب، نمنحك صلاحية الوصول لمحتوى الكورس (فيديوهات وملفات) مباشرة.", "After enrollment is confirmed on WhatsApp, we grant you access to the course content (videos & files) right away."],
    "crs.faq2q": ["هل أحتاج خبرة سابقة؟", "Do I need prior experience?"],
    "crs.faq2a": ["لا، الكورسات مقسّمة إلى مستويات (مبتدئ / متوسط / متقدم)، وكورسات المبتدئين تبدأ من الصفر تماماً.", "No. Courses are split into levels (Beginner / Intermediate / Advanced), and beginner courses start from absolute zero."],
    "crs.faq3q": ["هل أحصل على شهادة؟", "Do I get a certificate?"],
    "crs.faq3a": ["نعم، تحصل على شهادة إتمام عند إنهاء الكورس بالإضافة إلى ملفات الأكواد والمشاريع التطبيقية.", "Yes, you get a completion certificate plus the code files and practical projects."],
    "crs.faq4q": ["هل يوجد دعم أثناء الكورس؟", "Is there support during the course?"],
    "crs.faq4a": ["بالطبع، نوفّر دعماً مستمراً للإجابة على أسئلتك ومساعدتك في التطبيق العملي طوال فترة الكورس.", "Of course — we provide ongoing support to answer your questions and help you apply what you learn throughout the course."],

    /* ---- modal includes ---- */
    "inc.projTitle": ["محتويات ملف الاستلام:", "What you receive:"],
    "inc.code": ["الكود المصدر", "Source code"],
    "inc.wiring": ["مخطط التوصيل", "Wiring diagram"],
    "inc.pdf": ["شرح PDF كامل", "Full PDF guide"],
    "inc.crsTitle": ["يشمل الكورس:", "The course includes:"],
    "inc.videos": ["فيديوهات شرح", "Video lessons"],
    "inc.files": ["ملفات وأكواد", "Files & code"],
    "inc.cert": ["شهادة إتمام", "Completion certificate"],

    /* ---- catalog runtime ---- */
    "cat.currency": ["ج.م", "EGP"],
    "cat.lessons": ["درس", "lessons"],
    "cat.buy": ["شراء", "Buy"],
    "cat.enroll": ["اشترك", "Enroll"],
    "cat.details": ["التفاصيل", "Details"],
    "cat.ribbonProj": ["جاهز للتحميل", "Ready to download"],
    "cat.ribbonCrs": ["متاح الآن", "Available now"],
    "cat.viaWa": ["عبر واتساب", "via WhatsApp"],
    "cat.empty": ["لا توجد نتائج تطابق بحثك الحالي.", "No results match your search."],
    "cat.copied": ["تم نسخ الرابط بنجاح ✅", "Link copied ✅"],
    "cat.featProj": ["التفاصيل", "Details"],
    "cat.incProjLabels": ["الكود المصدر", "Source code"],

    /* ---- about page ---- */
    "ab.hero.kicker": ["من نحن", "About us"],
    "ab.hero.h1": ["ننفّذ، نُركّب، ونبرمج — بفريق واحد", "We build, install & code — as one team"],
    "ab.hero.lead": ["MT-Company بدأت من شغف بالإلكترونيات والبرمجة، وكبرت لتصبح فريقاً يقدّم خدمات متكاملة: مشاريع هندسية جاهزة، أنظمة تيار خفيف، حلول برمجية، وكورسات عملية — للطلاب والشركات على حدّ سواء.", "MT-Company grew from a passion for electronics and software into a team offering complete services: ready-made engineering projects, low-current systems, software solutions, and hands-on courses — for students and businesses alike."],
    "ab.cta1": ["شاهد أعمالنا", "See our work"],
    "ab.cta2": ["تواصل معنا", "Contact us"],
    "ab.story.kicker": ["قصتنا", "Our story"],
    "ab.story.h2": ["من ورشة صغيرة إلى شريك للشركات", "From a small workshop to a partner for businesses"],
    "ab.story.p1": ["بدأت MT-Company من شغف بالإلكترونيات والبرمجة، وقدرة على تحويل الأفكار إلى أنظمة تعمل على أرض الواقع لا مجرد رسومات على الورق.", "MT-Company began with a passion for electronics and software, and a knack for turning ideas into systems that actually work — not just drawings on paper."],
    "ab.story.p2": ["مع الوقت كبر الفريق وتوسّعت الخدمات، حتى صرنا نخدم الشركات والمؤسسات في أنظمة التيار الخفيف والحلول البرمجية، بنفس الاهتمام بالتفاصيل الذي بدأنا به.", "Over time the team grew and our services expanded, until we now serve companies and organizations in low-current systems and software — with the same attention to detail we started with."],
    "ab.mission.kicker": ["الرسالة والرؤية", "Mission & Vision"],
    "ab.mission.h2": ["نحو شريك تقني تثق به", "Toward a tech partner you can trust"],
    "ab.mission.mTitle": ["رسالتنا", "Our Mission"],
    "ab.mission.mText": ["أن نوفّر للشركات أنظمة تيار خفيف وحلولاً برمجية موثوقة، بجودة تنفيذ عالية ودعمٍ لا يتوقف عند التسليم.", "To provide businesses with reliable low-current systems and software, built to a high standard with support that doesn't stop at handover."],
    "ab.mission.vTitle": ["رؤيتنا", "Our Vision"],
    "ab.mission.vText": ["أن نكون الخيار الأول للشركات في أنظمة الحماية والاتصال والتحوّل الرقمي.", "To be the first choice for companies in security, communication, and digital-transformation systems."],
    "ab.team.kicker": ["فريقنا", "Our team"],
    "ab.team.h2": ["أشخاص وراء كل مشروع", "The people behind every project"],
    "ab.team.p": ["فريق من المهندسين والمطوّرين يقوده شغف بالجودة والتنفيذ المتقن.", "A team of engineers and developers driven by a passion for quality and solid execution."],
    "ab.team.ceoName": ["محمود الطوخي", "Mahmoud Eltoukhy"],
    "ab.team.ceoRole": ["المؤسس والرئيس التنفيذي", "Founder & CEO"],
    "ab.team.ceoBio": ["يقود MT-Company برؤية تجمع بين الهندسة والبرمجة لخدمة الشركات.", "Leads MT-Company with a vision that blends engineering and software to serve businesses."],
    "ab.team.r1t": ["فريق التيار الخفيف", "Low-current Team"],
    "ab.team.r1d": ["تركيب وصيانة الكاميرات والشبكات وأنظمة الإنذار.", "Installing and maintaining cameras, networks, and alarm systems."],
    "ab.team.r2t": ["فريق البرمجة", "Software Team"],
    "ab.team.r2d": ["تطوير المواقع والتطبيقات وأنظمة الإدارة.", "Building websites, apps, and management systems."],
    "ab.team.r3t": ["الدعم والصيانة", "Support & Maintenance"],
    "ab.team.r3d": ["متابعة ودعم مستمر بعد التسليم.", "Ongoing follow-up and support after delivery."],
    "ab.v1": ["الجودة قبل الكمية — لا نسلّم شيئاً لا نرضاه لأنفسنا", "Quality over quantity — we don't ship what we wouldn't accept ourselves"],
    "ab.v2": ["شفافية في السعر والمدة قبل ما نبدأ", "Transparency on price and timeline before we start"],
    "ab.v3": ["نلتزم بمواعيد التسليم المتّفق عليها", "We stick to the agreed delivery dates"],
    "ab.v4": ["دعم وصيانة بعد التسليم، مش بننتهي عند الاستلام", "Support and maintenance after delivery — we don't stop at handover"],
    "ab.svc.kicker": ["ماذا نقدّم", "What we offer"],
    "ab.svc.h2": ["خدماتنا الأربع", "Our four services"],
    "ab.svc.p": ["رحلة متكاملة من التعلّم إلى التنفيذ، تحت مسؤولية فريق واحد.", "A complete journey from learning to delivery, under one team's responsibility."],
    "ab.p1t": ["مشاريع هندسية", "Engineering projects"],
    "ab.p1d": ["مشاريع تخرّج جاهزة بالكود والتوصيلات وشرح PDF، وتسليم فوري.", "Ready-made graduation projects with code, wiring & a PDF guide, delivered instantly."],
    "ab.p1m": ["المشاريع", "Projects"],
    "ab.p2t": ["التيار الخفيف", "Low-current"],
    "ab.p2d": ["كاميرات، شبكات، إنذار حريق، إنتركم وكنترول أكسس — توريد وتركيب وصيانة.", "Cameras, networks, fire alarm, intercom & access control — supply, install, maintain."],
    "ab.p2m": ["الأنظمة", "Systems"],
    "ab.p3t": ["حلول برمجية", "Software"],
    "ab.p3d": ["مواقع وتطبيقات ولوحات تحكم ومتاجر إلكترونية بتقنيات Full-Stack.", "Websites, apps, dashboards & online stores with full-stack technologies."],
    "ab.p3m": ["البرمجة", "Software"],
    "ab.p4t": ["كورسات تعليمية", "Courses"],
    "ab.p4d": ["مسارات عملية متدرّجة مع ملفات وتطبيقات وشهادة إتمام.", "Progressive hands-on tracks with files, projects & a certificate."],
    "ab.p4m": ["الكورسات", "Courses"],
    "ab.why.kicker": ["لماذا نحن", "Why us"],
    "ab.why.h2": ["ما الذي يميّزنا", "What sets us apart"],
    "ab.w1t": ["تنفيذ فعلي", "Real execution"],
    "ab.w1d": ["فريق يشتغل بيده على الأرض، لا وعوداً على الورق.", "A team that works on the ground, not promises on paper."],
    "ab.w2t": ["خلفية أكاديمية", "Academic background"],
    "ab.w2d": ["نفهم متطلبات المشاريع الجامعية ونتكلم لغة الطالب والدكتور.", "We understand university project requirements and speak the language of students and professors."],
    "ab.w3t": ["خدمة متكاملة", "One-stop service"],
    "ab.w3d": ["هندسة وتركيب وبرمجة وتدريب من جهة واحدة تتابع معها.", "Engineering, installation, software & training from a single point of contact."],
    "ab.w4t": ["تواصل قريب", "Close communication"],
    "ab.w4d": ["نرد بسرعة ونشرح كل خطوة بلغة واضحة بلا تعقيد.", "We reply fast and explain every step in plain language."],
    "ab.contact.h2": ["جاهزون لمساعدتك", "Ready to help you"],
    "ab.contact.p": ["راسلنا في أي وقت عبر واتساب أو تابعنا على مواقع التواصل — نرد عليك بأسرع وقت.", "Message us anytime on WhatsApp or follow us on social media — we reply as fast as we can."],
};

let _lang = (typeof localStorage !== "undefined" && localStorage.getItem("mt_lang")) || "ar";

function getLang() { return _lang; }
function t(key) {
    const e = DICT[key];
    if (!e) return key;
    return _lang === "en" ? e[1] : e[0];
}
/* pick a localized field from a data object: L(item,'title') -> item.title_en || item.title */
function L(obj, field) {
    return _lang === "en" && obj[field + "_en"] ? obj[field + "_en"] : obj[field];
}

function applyI18n(root) {
    root = root || document;
    root.querySelectorAll("[data-i18n]").forEach((el) => { el.innerHTML = t(el.getAttribute("data-i18n")); });
    root.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.getAttribute("data-i18n-ph")); });
    root.querySelectorAll("[data-i18n-title]").forEach((el) => { el.title = t(el.getAttribute("data-i18n-title")); });
}

function _applyDir() {
    document.documentElement.lang = _lang;
    document.documentElement.dir = _lang === "ar" ? "rtl" : "ltr";
}
function _updateToggle() {
    const b = document.getElementById("langToggle");
    if (b) b.textContent = _lang === "ar" ? "EN" : "ع";
}
function setLang(l) {
    _lang = l === "en" ? "en" : "ar";
    try { localStorage.setItem("mt_lang", _lang); } catch (e) {}
    _applyDir();
    applyI18n();
    _updateToggle();
    window.dispatchEvent(new CustomEvent("mt:lang", { detail: _lang }));
}
function toggleLang() { setLang(_lang === "ar" ? "en" : "ar"); }

function initI18n() { _applyDir(); applyI18n(); _updateToggle(); }
