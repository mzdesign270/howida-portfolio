
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
            content: "نقدم خدمات متكاملة لتنظيم الفعاليات والمؤتمرات باحترافية عالية، بدءًا من التخطيط والتنسيق وحتى التنفيذ. نهتم بجميع التفاصيل لضمان تجربة مميزة للحضور وتحقيق أهداف الحدث.\n\nسواء كانت مؤتمرات، معارض، ورش عمل، أو حفلات إطلاق المنتجات، نعمل على تقديم حلول تنظيمية مبتكرة تعكس هوية الجهة المنظمة وتضمن نجاح الفعالية بأعلى معايير الجودة."
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
        // 1. استبدال نص "تصميم علامة تجارية ومركبات" بـ "تنظيم الجلسات"
        const allElements = document.querySelectorAll('*');
        allElements.forEach(el => {
            if (el.children.length === 0 && el.textContent.includes("تصميم علامة تجارية ومركبات")) {
                el.textContent = el.textContent.replace("تصميم علامة تجارية ومركبات", "تنظيم الجلسات");
            }
        });

        // 2. إنشاء الـ Modal
        const modalHtml = `
            <div id="custom-modal" style="display:none; position:fixed; z-index:9999; left:0; top:0; width:100%; height:100%; background-color:rgba(0,0,0,0.7); backdrop-filter:blur(5px); justify-content:center; align-items:center;">
                <div style="background-color:#fff; padding:30px; border-radius:15px; max-width:600px; width:90%; position:relative; box-shadow:0 10px 30px rgba(0,0,0,0.3); text-align:right; font-family:'Tajawal', sans-serif;">
                    <span id="close-modal" style="position:absolute; top:15px; left:15px; font-size:24px; cursor:pointer; color:#888;">&times;</span>
                    <h2 id="modal-title" style="color:#d4af37; margin-bottom:20px; font-family:'Cormorant Garamond', serif; font-size:28px;"></h2>
                    <p id="modal-body" style="line-height:1.8; color:#444; font-size:16px; white-space:pre-line;"></p>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);

        const modal = document.getElementById('custom-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');
        const closeBtn = document.getElementById('close-modal');

        closeBtn.onclick = () => modal.style.display = 'none';
        window.onclick = (event) => { if (event.target == modal) modal.style.display = 'none'; };

        // 3. إضافة أزرار "اعرف أكثر"
        function injectButtons() {
            Object.keys(servicesData).forEach(serviceName => {
                const elements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, span, p, div'));
                const target = elements.find(el => el.children.length === 0 && el.textContent.trim() === serviceName);
                
                if (target && !target.nextElementSibling?.classList.contains('learn-more-btn')) {
                    const btn = document.createElement('button');
                    btn.textContent = 'اعرف أكثر';
                    btn.className = 'learn-more-btn';
                    btn.style.cssText = `
                        display: block;
                        margin-top: 10px;
                        padding: 8px 20px;
                        background-color: transparent;
                        border: 1px solid #d4af37;
                        color: #d4af37;
                        border-radius: 5px;
                        cursor: pointer;
                        font-family: 'Tajawal', sans-serif;
                        transition: all 0.3s ease;
                        font-size: 14px;
                    `;
                    btn.onmouseover = () => {
                        btn.style.backgroundColor = '#d4af37';
                        btn.style.color = '#fff';
                    };
                    btn.onmouseout = () => {
                        btn.style.backgroundColor = 'transparent';
                        btn.style.color = '#d4af37';
                    };
                    btn.onclick = (e) => {
                        e.preventDefault();
                        modalTitle.textContent = servicesData[serviceName].title;
                        modalBody.textContent = servicesData[serviceName].content;
                        modal.style.display = 'flex';
                    };
                    target.parentNode.insertBefore(btn, target.nextSibling);
                }
            });
        }

        // تشغيل الحقن بعد فترة وجيزة للتأكد من تحميل React للمحتوى
        setTimeout(injectButtons, 1000);
        // إعادة المحاولة في حال كان الموقع Single Page App ويتغير المحتوى
        setInterval(injectButtons, 3000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initUpdates);
    } else {
        initUpdates();
    }
})();
