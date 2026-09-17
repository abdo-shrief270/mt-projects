/* MT-Projects — projects catalog data.
   Edit freely: cat ∈ arduino | iot | robotics | ai (drives filter + tag colour). */
const PROJECTS = [
    {
        id: "p1", cat: "arduino", tagLabel: "Arduino", price: 350, oldPrice: 450,
        title: "نظام ري ذكي بالأردوينو (Smart Irrigation)",
        image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=600&q=80",
        short: "قياس رطوبة التربة والتحكم في مضخة المياه تلقائياً مع عرض البيانات على شاشة LCD.",
        full: "مشروع أردوينو عملي يعتمد على لوحة Arduino Uno وحساس رطوبة التربة وموديول ريليه للتحكم بمضخة المياه وشاشة LCD 16x2، مع منطق تحكم يفتح الري عند جفاف التربة ويغلقه عند بلوغ الرطوبة المطلوبة.",
    },
    {
        id: "p2", cat: "iot", tagLabel: "IoT", price: 450,
        title: "نظام المنزل الذكي (Smart Home IoT)",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
        short: "تحكم كامل بالأجهزة وتتبع درجات الحرارة والغاز عبر الإنترنت وتطبيق الموبايل باستخدام ESP32.",
        full: "مشروع IoT كامل يعتمد على متحكم ESP32 مرتبط بسحابة برمجية وتطبيق على الهاتف، يتضمن التحكم في الإضاءة والأجهزة وتنبيهات تسرب الغاز ومتابعة درجة الحرارة لحظياً.",
    },
    {
        id: "p3", cat: "robotics", tagLabel: "Robotics", price: 600,
        title: "ذراع روبوتية بتتبع حركة اليد (Gesture Robot)",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
        short: "ذراع روبوتية تتحرك متزامنة مع حركة يد المستخدم باستخدام حساسات التسارع ومحركات السيرفو.",
        full: "مشروع روبوتات متميز يتكون من ذراع ذات 4 درجات حرية (4-DOF) يتم توجيهها لاسلكياً بواسطة قفاز ذكي مثبت عليه حساسات الحركة (MPU6050)، مع وحدة إرسال واستقبال لاسلكية.",
    },
    {
        id: "p4", cat: "ai", tagLabel: "AI", price: 500,
        title: "كشف الحضور بالوجه (AI Attendance)",
        image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=600&q=80",
        short: "نموذج تعلم آلي للتعرف على وجوه الطلاب وتوثيق الحضور تلقائياً في قاعدة بيانات.",
        full: "مشروع ذكاء اصطناعي يعتمد على رؤية الحاسوب باستخدام Python و OpenCV للتعرف على الوجوه وتسجيل الحضور والانصراف تلقائياً في ملف Excel أو قاعدة بيانات، مع واجهة بسيطة.",
    },
    {
        id: "p5", cat: "arduino", tagLabel: "Arduino", price: 380,
        title: "نظام إنذار وحماية بالـ RFID",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
        short: "فتح الأبواب والتحكم بالوصول باستخدام كروت RFID ومحرك سيرفو مع بوزر إنذار.",
        full: "مشروع حماية بالأردوينو باستخدام قارئ RFID RC522 ومحرك Servo لتأمين البوابات الإلكترونية وإدارة الصلاحيات، مع تنبيه صوتي عند محاولة وصول غير مصرّح بها.",
    },
    {
        id: "p6", cat: "iot", tagLabel: "IoT", price: 400,
        title: "محطة أرصاد جوية (IoT Weather Station)",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=600&q=80",
        short: "رصد حالة الجو والضغط الجوي والرطوبة ورفع البيانات لموقع إلكتروني مباشر.",
        full: "مشروع إنترنت الأشياء لرصد الطقس بشكل مستمر (حرارة، رطوبة، ضغط جوي) وعرض النتائج على شاشة OLED ورفعها لسحابة ThingSpeak مع رسوم بيانية لحظية.",
    },
    {
        id: "p7", cat: "ai", tagLabel: "AI", price: 550,
        title: "روبوت محادثة تعليمي (AI Chatbot)",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=600&q=80",
        short: "مساعد ذكي يجيب على أسئلة الطلاب باللغة العربية باستخدام معالجة اللغة الطبيعية.",
        full: "مشروع ذكاء اصطناعي لبناء روبوت محادثة يفهم أسئلة المستخدم باللغة العربية ويردّ عليها، مبني على نماذج معالجة اللغة الطبيعية مع واجهة ويب بسيطة قابلة للتخصيص.",
    },
    {
        id: "p8", cat: "robotics", tagLabel: "Robotics", price: 520,
        title: "سيارة ذاتية القيادة (Line Follower + Obstacle)",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
        short: "سيارة تتبع مسار وتتجنب العوائق تلقائياً باستخدام حساسات IR والموجات فوق الصوتية.",
        full: "مشروع روبوتات متكامل لسيارة ذكية تتبع خطاً محدداً وتتوقف أو تلتف عند وجود عائق باستخدام حساسات الأشعة تحت الحمراء وحساس المسافة Ultrasonic ومحرّكات DC مع درايفر L298N.",
    },
];
