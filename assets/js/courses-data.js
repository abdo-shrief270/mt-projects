/* MT-Projects — courses catalog data (sample content — replace with real courses).
   cat ∈ beginner | intermediate | advanced (drives filter + tag colour). */
const COURSES = [
    {
        id: "c1", cat: "beginner", tagLabel: "مبتدئ", track: "Arduino", duration: "12 ساعة", lessons: 28, price: 300, oldPrice: 400,
        title: "أساسيات الأردوينو من الصفر",
        image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=600&q=80",
        short: "ابدأ رحلتك في الإلكترونيات: مكونات، توصيلات، وبرمجة أول مشاريعك خطوة بخطوة.",
        full: "كورس تأسيسي شامل للأردوينو يبدأ من التعرف على اللوحة والمكونات، مروراً بالتوصيلات والبريدبورد، وصولاً لبرمجة الحساسات والمحركات وبناء 5 مشاريع عملية بنفسك.",
    },
    {
        id: "c2", cat: "intermediate", tagLabel: "متوسط", track: "IoT", duration: "16 ساعة", lessons: 34, price: 450,
        title: "إنترنت الأشياء مع ESP32",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
        short: "اربط أجهزتك بالإنترنت وتحكم فيها عن بعد وابنِ لوحات تحكم سحابية احترافية.",
        full: "كورس عملي لبناء تطبيقات إنترنت الأشياء باستخدام ESP32: الاتصال بالواي فاي، بروتوكول MQTT، رفع البيانات للسحابة، بناء لوحات تحكم، والتحكم في الأجهزة من تطبيق الموبايل.",
    },
    {
        id: "c3", cat: "intermediate", tagLabel: "متوسط", track: "PCB Design", duration: "10 ساعات", lessons: 22, price: 400,
        title: "تصميم دوائر PCB الاحترافية",
        image: "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?auto=format&fit=crop&w=600&q=80",
        short: "حوّل مشاريعك من بريدبورد إلى لوحات PCB احترافية جاهزة للتصنيع باستخدام EasyEDA.",
        full: "كورس تصميم الدوائر المطبوعة (PCB) من الرسم التخطيطي (Schematic) إلى تخطيط اللوحة (Layout) وقواعد التصميم وتجهيز ملفات Gerber وإرسالها للمصنع، مع مشروع تطبيقي كامل.",
    },
    {
        id: "c4", cat: "advanced", tagLabel: "متقدم", track: "Robotics", duration: "20 ساعة", lessons: 40, price: 600,
        title: "بناء الروبوتات والتحكم الذكي",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
        short: "من محركات السيرفو إلى خوارزميات التحكم — ابنِ روبوتات متحركة وذراعات آلية.",
        full: "كورس متقدم في الروبوتات يغطي أنواع المحركات ودرايفراتها، الحركة والتوجيه، حساسات المسافة والرؤية، خوارزميات تتبع المسار وتجنب العوائق، وبناء ذراع روبوتية متعددة المحاور.",
    },
    {
        id: "c5", cat: "advanced", tagLabel: "متقدم", track: "AI / Vision", duration: "18 ساعة", lessons: 36, price: 650,
        title: "الذكاء الاصطناعي ورؤية الحاسوب",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=600&q=80",
        short: "تعلّم Python و OpenCV وابنِ أنظمة تعرف على الوجوه والأجسام لمشاريع تخرجك.",
        full: "كورس تطبيقي في الذكاء الاصطناعي ورؤية الحاسوب باستخدام Python و OpenCV: معالجة الصور، اكتشاف الوجوه والأجسام، تدريب نماذج بسيطة، ودمج النتائج مع الأردوينو لمشاريع ذكية.",
    },
    {
        id: "c6", cat: "beginner", tagLabel: "مبتدئ", track: "Electronics", duration: "8 ساعات", lessons: 18, price: 250,
        title: "أساسيات الإلكترونيات العملية",
        image: "https://images.unsplash.com/photo-1631545806609-c2b999c8e5e6?auto=format&fit=crop&w=600&q=80",
        short: "افهم المقاومات والمكثفات والترانزستور واقرأ الدوائر بثقة قبل أي مشروع.",
        full: "كورس تمهيدي في الإلكترونيات يشرح المكونات الأساسية (مقاومات، مكثفات، دايود، ترانزستور)، قوانين أوم وكيرشوف، قراءة الدوائر، واستخدام الأفوميتر — أساس متين لأي مشروع لاحق.",
    },
];
