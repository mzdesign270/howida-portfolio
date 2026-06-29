
(function() {
    const servicesData = {
        "الدعاية والإعلان": {
            title: "الدعاية والإعلان",
            content: "نساعدك على الوصول إلى عملائك بطريقة احترافية من خلال تصميم وإدارة الحملات الإعلانية التي تعزز ظهور نشاطك التجاري وتزيد من فرص المبيعات. نقدم حلولًا إعلانية مبتكرة تناسب مختلف المنصات، مع التركيز على جذب العملاء وتحقيق أفضل النتائج بأفضل تكلفة.\n\nسواء كنت تمتلك مشروعًا جديدًا أو علامة تجارية قائمة، فإننا نعمل على إنشاء محتوى إعلاني جذاب واستراتيجيات تسويقية تساعدك على النمو وبناء حضور قوي في السوق."
        },
        "الإنتاج المرئي والمسموع": {
            title: "الإنتاج المرئي والمسموع",
            content: "نقدم خدمات إنتاج مرئي ومسموع احترافية تساعد على إبراز هويتك وجذب جمهورك المستهدف. نقوم بإنتاج الفيديوهات الترويجية، والإعلانات، والموشن جرافيك، والمحتوى الصوتي بجودة عالية تناسب مختلف المنصات الرقمية.\n\nنحرص على تقديم محتوى إبداعي يعكس رسالتك ويترك انطباعًا مميزًا لدى عملائك، بدءًا من الفكرة والتخطيط وحتى المونتاج والإخراج النهائي."
        },
        "تنظيم الفعاليات والمؤتمرات": {
            title: "تنظيم الفعاليات والمؤتمرات",
            content: "نقدم خدمات متكاملة لتنظيم الفعاليات والمؤتمرات بااحترافية عالية، بدءًا من التخطيط والتنسيق وحتى التنفيذ. نهتم بجميع التفاصيل لضمان تجربة مميزة للحضور وتحقيق أهداف الحدث.\n\nسواء كانت مؤتمرات، معارض، ورش عمل، أو حفلات إطلاق المنتجات، نعمل على تقديم حلول تنظيمية مبتكرة تعكس هوية الجهة المنظمة وتضمن نجاح الفعالية بأعلى معايير الجودة."
        },
        "الهدايا الدعائية والطباعة": {
            title: "الهدايا الدعائية والطباعة",
            content: "نوفر مجموعة متنوعة من الهدايا الدعائية وخدمات الطباعة الاحترافية التي تعزز هوية علامتك التجارية وتترك انطباعًا مميزًا لدى عملائك. نقدم طباعة عالية الجودة على مختلف المواد، مع إمكانية تخصيص التصاميم بما يتناسب مع احتياجاتك.\n\nسواء كنت بحاجة إلى بطاقات أعمال، بروشورات، لوحات، أكواب، أقلام، أو هدايا تحمل شعار شركتك، فإننا نقدم حلولًا متكاملة تجمع بين الجودة، والأناقة، والاحترافية."
        },
        "وكالة الترفيه والسيرك": {
            title: "وكالة الترفيه والسيرك",
            content: "نقدم خدمات تنظيم وإدارة العروض الترفيهية والسيرك لإضفاء أجواء استثنائية على الفعاليات والمناسبات. نوفر عروضًا متنوعة تناسب جميع الأعمار، تشمل عروض السيرك، والبهلوانات، والفقرات التفاعلية، والعروض المسرحية، وغيرها من الفعاليات الترفيهية.\n\nنحرص على تقديم تجربة ممتعة وآمنة تُسهم في نجاح الحدث وترك انطباع لا يُنسى لدى الحضور، مع الاهتمام بأدق التفاصيل لضمان أعلى مستويات الجودة والاحترافية."
        },
        "تنظيم الجلسات": {
            title: "تنظيم الجلسات",
            content: "نقدم خدمات تنظيم الجلسات بمختلف أنواعها، سواء كانت جلسات حوارية، أو اجتماعات، أو ندوات، أو لقاءات خاصة. نهتم بتجهيز المكان، وتنسيق التفاصيل، وإدارة الجلسة بما يضمن تجربة احترافية ومريحة للحضور.\n\nنحرص على توفير بيئة منظمة تعكس هوية المناسبة، مع الاهتمام بأدق التفاصيل لضمان نجاح الجلسة وتحقيق أهدافها."
        }
    };

    function initUpdates() {
        // إنشاء الـ Modal إذا لم يكن موجوداً
        if (!document.getElementById('custom-modal')) {
            const modalHtml = `
                <div id="custom-modal" style="display:none; position:fixed; z-index:99999; left:0; top:0; width:100%; height:100%; background-color:rgba(0,0,0,0.8); backdrop-filter:blur(8px); justify-content:center; align-items:center;">
                    <div style="background-color:#fff; padding:40px; border-radius:20px; max-width:650px; width:90%; position:relative; box-shadow:0 20px 50px rgba(0,0,0,0.5); text-align:right; font-family:'Tajawal', sans-serif; border-top: 5px solid #d4af37;">
                        <span id="close-modal" style="position:absolute; top:20px; left:20px; font-size:30px; cursor:pointer; color:#999; line-height:1;">&times;</span>
                        <h2 id="modal-title" style="color:#d4af37; margin-bottom:25px; font-family:'Cormorant Garamond', serif; font-size:32px; border-bottom: 1px solid #eee; padding-bottom: 15px;"></h2>
                        <p id="modal-body" style="line-height:2; color:#333; font-size:18px; white-space:pre-line;"></p>
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

        // البحث عن العناصر وحقن الأزرار
        const allTextElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, span, p, div');
        
        allTextElements.forEach(el => {
            const text = el.textContent.trim();
            
            // استبدال النص القديم بالجديد
            if (text === "تصميم علامة تجارية ومركبات") {
                el.textContent = "تنظيم الجلسات";
            }

            // حقن الأزرار
            if (servicesData[text] || (text === "تصميم علامة تجارية ومركبات")) {
                const serviceKey = text === "تصميم علامة تجارية ومركبات" ? "تنظيم الجلسات" : text;
                
                // التأكد من عدم إضافة الزر مرتين
                if (!el.parentElement.querySelector(`.btn-${serviceKey.replace(/\s+/g, '-')}`)) {
                    const btn = document.createElement('button');
                    btn.textContent = 'اعرف أكثر';
                    btn.className = `learn-more-btn btn-${serviceKey.replace(/\s+/g, '-')}`;
                    btn.style.cssText = `
                        display: inline-block;
                        margin-top: 15px;
                        padding: 10px 25px;
                        background-color: #d4af37;
                        border: none;
                        color: #fff;
                        border-radius: 30px;
                        cursor: pointer;
                        font-family: 'Tajawal', sans-serif;
                        font-weight: bold;
                        transition: all 0.3s ease;
                        font-size: 15px;
                        box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
                    `;
                    btn.onmouseover = () => {
                        btn.style.transform = 'translateY(-2px)';
                        btn.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.4)';
                    };
                    btn.onmouseout = () => {
                        btn.style.transform = 'translateY(0)';
                        btn.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
                    };
                    btn.onclick = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        modalTitle.textContent = servicesData[serviceKey].title;
                        modalBody.textContent = servicesData[serviceKey].content;
                        modal.style.display = 'flex';
                    };
                    
                    // محاولة وضع الزر في مكان مناسب (بعد العنصر أو في نهايته)
                    el.after(btn);
                }
            }
        });
    }

    // تشغيل مستمر للتعامل مع تحديثات React
    setInterval(initUpdates, 2000);
    initUpdates();
})();
