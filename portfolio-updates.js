
(function() {
    const servicesData = {
        "advertising": {
            keywords: ["دعاية", "إعلان", "ADVERTISING"],
            title: "الدعاية والإعلان",
            content: "نساعدك على الوصول إلى عملائك بطريقة احترافية من خلال تصميم وإدارة الحملات الإعلانية التي تعزز ظهور نشاطك التجاري وتزيد من فرص المبيعات. نقدم حلولًا إعلانية مبتكرة تناسب مختلف المنصات، مع التركيز على جذب العملاء وتحقيق أفضل النتائج بأفضل تكلفة.\n\nسواء كنت تمتلك مشروعًا جديدًا أو علامة تجارية قائمة، فإننا نعمل على إنشاء محتوى إعلاني جذاب واستراتيجيات تسويقية تساعدك على النمو وبناء حضور قوي في السوق."
        },
        "media": {
            keywords: ["مرئي", "مسموع", "MEDIA PRODUCTION"],
            title: "الإنتاج المرئي والمسموع",
            content: "نقدم خدمات إنتاج مرئي ومسموع احترافية تساعد على إبراز هويتك وجذب جمهورك المستهدف. نقوم بإنتاج الفيديوهات الترويجية، والإعلانات، والموشن جرافيك، والمحتوى الصوتي بجودة عالية تناسب مختلف المنصات الرقمية.\n\nنحرص على تقديم محتوى إبداعي يعكس رسالتك ويترك انطباعًا مميزًا لدى عملائك، بدءًا من الفكرة والتخطيط وحتى المونتاج والإخراج النهائي."
        },
        "events": {
            keywords: ["فعاليات", "مؤتمرات", "EVENTS"],
            title: "تنظيم الفعاليات والمؤتمرات",
            content: "نقدم خدمات متكاملة لتنظيم الفعاليات والمؤتمرات بااحترافية عالية، بدءًا من التخطيط والتنسيق وحتى التنفيذ. نهتم بجميع التفاصيل لضمان تجربة مميزة للحضور وتحقيق أهداف الحدث.\n\nسواء كانت مؤتمرات، معارض، ورش عمل، أو حفلات إطلاق المنتجات، نعمل على تقديم حلول تنظيمية مبتكرة تعكس هوية الجهة المنظمة وتضمن نجاح الفعالية بأعلى معايير الجودة."
        },
        "gifts": {
            keywords: ["هدايا", "طباعة", "GIFTS"],
            title: "الهدايا الدعائية والطباعة",
            content: "نوفر مجموعة متنوعة من الهدايا الدعائية وخدمات الطباعة الاحترافية التي تعزز هوية علامتك التجارية وتترك انطباعًا مميزًا لدى عملائك. نقدم طباعة عالية الجودة على مختلف المواد، مع إمكانية تخصيص التصاميم بما يتناسب مع احتياجاتك.\n\nسواء كنت بحاجة إلى بطاقات أعمال، بروشورات، لوحات، أكواب، أقلام، أو هدايا تحمل شعار شركتك، فإننا نقدم حلولًا متكاملة تجمع بين الجودة، والأناقة، والاحترافية."
        },
        "entertainment": {
            keywords: ["ترفيه", "سيرك", "ENTERTAINMENT"],
            title: "وكالة الترفيه والسيرك",
            content: "نقدم خدمات تنظيم وإدارة العروض الترفيهية والسيرك لإضفاء أجواء استثنائية على الفعاليات والمناسبات. نوفر عروضًا متنوعة تناسب جميع الأعمار، تشمل عروض السيرك، والبهلوانات، والفقرات التفاعلية، والعروض المسرحية، وغيرها من الفعاليات الترفيهية.\n\nنحرص على تقديم تجربة ممتعة وآمنة تُسهم في نجاح الحدث وترك انطباع لا يُنسى لدى الحضور، مع الاهتمام بأدق التفاصيل لضمان أعلى مستويات الجودة والاحترافية."
        },
        "sessions": {
            keywords: ["جلسات", "SESSIONS", "علامة تجارية ومركبات"],
            title: "تنظيم الجلسات",
            content: "نقدم خدمات تنظيم الجلسات بمختلف أنواعها، سواء كانت جلسات حوارية، أو اجتماعات، أو ندوات، أو لقاءات خاصة. نهتم بتجهيز المكان، وتنسيق التفاصيل، وإدارة الجلسة بما يضمن تجربة احترافية ومريحة للحضور.\n\nنحرص على توفير بيئة منظمة تعكس هوية المناسبة، مع الاهتمام بأدق التفاصيل لضمان نجاح الجلسة وتحقيق أهدافها."
        }
    };

    function initUpdates() {
        if (!document.getElementById('custom-modal')) {
            const modalHtml = `
                <div id="custom-modal" style="display:none; position:fixed; z-index:999999; left:0; top:0; width:100%; height:100%; background-color:rgba(0,0,0,0.85); backdrop-filter:blur(10px); justify-content:center; align-items:center;">
                    <div style="background-color:#fff; padding:35px; border-radius:20px; max-width:600px; width:90%; position:relative; box-shadow:0 25px 60px rgba(0,0,0,0.5); text-align:right; font-family:'Tajawal', sans-serif; border-top: 6px solid #d4af37;">
                        <span id="close-modal" style="position:absolute; top:20px; left:20px; font-size:35px; cursor:pointer; color:#bbb; line-height:0.8;">&times;</span>
                        <h2 id="modal-title" style="color:#d4af37; margin-bottom:20px; font-family:'Cormorant Garamond', serif; font-size:30px; border-bottom: 1px solid #eee; padding-bottom: 10px;"></h2>
                        <p id="modal-body" style="line-height:1.8; color:#333; font-size:17px; white-space:pre-line;"></p>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHtml);
            document.getElementById('close-modal').onclick = () => document.getElementById('custom-modal').style.display = 'none';
            window.onclick = (e) => { if (e.target == document.getElementById('custom-modal')) document.getElementById('custom-modal').style.display = 'none'; };
        }

        const modal = document.getElementById('custom-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');

        const allElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, span, p, div');
        
        allElements.forEach(el => {
            const text = el.textContent.trim();
            if (text === "") return;

            // استبدال نص "تصميم علامة تجارية ومركبات" بـ "تنظيم الجلسات"
            if (text.includes("علامة تجارية ومركبات")) {
                el.textContent = el.textContent.replace("تصميم علامة تجارية ومركبات", "تنظيم الجلسات");
            }

            // البحث عن الخدمة المناسبة بناءً على الكلمات المفتاحية
            let foundService = null;
            for (const key in servicesData) {
                if (servicesData[key].keywords.some(kw => text.includes(kw))) {
                    foundService = servicesData[key];
                    break;
                }
            }

            if (foundService) {
                // التأكد من أننا نضع الزر مرة واحدة فقط لكل قسم
                // نبحث عن أقرب حاوية (Container) تحتوي على النص
                const container = el.closest('div');
                if (container && !container.querySelector('.learn-more-btn')) {
                    const btn = document.createElement('button');
                    btn.textContent = 'اعرف أكثر';
                    btn.className = 'learn-more-btn';
                    btn.style.cssText = `
                        display: block;
                        margin: 10px auto 0;
                        padding: 6px 18px;
                        background-color: rgba(212, 175, 55, 0.9);
                        border: 1px solid #d4af37;
                        color: #fff;
                        border-radius: 20px;
                        cursor: pointer;
                        font-family: 'Tajawal', sans-serif;
                        font-size: 13px;
                        transition: all 0.3s ease;
                        z-index: 10;
                        position: relative;
                    `;
                    btn.onclick = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        modalTitle.textContent = foundService.title;
                        modalBody.textContent = foundService.content;
                        modal.style.display = 'flex';
                    };
                    
                    // نضع الزر بعد العنصر الذي يحتوي على النص الإنجليزي (مثل ADVERTISING)
                    // أو في نهاية الحاوية
                    container.appendChild(btn);
                }
            }
        });
    }

    setInterval(initUpdates, 2000);
    initUpdates();
})();
