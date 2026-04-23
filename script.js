// 双语文案配置
const translations = {
    zh: {
        'nav.education': '教育背景',
        'nav.projects': '项目经历',
        'nav.skills': '相关技能',
        'nav.honors': '荣誉奖项',
        'nav.contact': '联系方式',
        'profile.name': '郑圆圆',
        'profile.title': '人工智能方向 · 控制科学与工程硕士（拟录取）',
        'hero.status': '正在寻找机会. ',
        'hero.details': '详细信息 ↓',
        'hero.viewProjects': '查看我的项目 →',
        'skills.title': '我的核心能力',
        'skills.sectionTitle': '相关技能',
        'skills.techSkills': '技术技能',
        'skills.languageSkills': '语言能力',
        'skills.dataStructures': '数据结构与算法',
        'skills.mlDl': '机器学习 / 深度学习',
        'contact.title': '联系方式',
        'contact.location': '安徽合肥',
        'contact.party': '中共党员',
        'education.title': '教育背景',
        'education.sdufe': '山东财经大学',
        'education.bucea': '北京建筑大学',
        'education.undergraduate': '人工智能 本科',
        'education.graduate': '控制科学与工程 研究生（拟录取）',
        'education.period': '2026.09 入学',
        'education.courses': '主修课程',
        'projects.title': '项目经历',
        'project1.title': '基于 YOLOv5 的垃圾分类算法研究',
        'project1.role': '毕业设计 · 主要负责人',
        'project1.desc': '针对垃圾分类中目标尺度差异大、遮挡频繁、类别不平衡等问题改进 YOLOv5。',
        'project1.workTitle': '核心工作与成果：',
        'project1.work1': '引入 <span class="tech-tag">CBAM</span> 注意力机制，增强特征提取。',
        'project1.work2': '设计 <span class="tech-tag">Focal-CIoU</span> 联合损失函数，改善类别不均衡与定位偏差。',
        'project1.work3': '鲁棒性验证：亮度波动 ±8%、30% 噪声、局部遮挡下稳定。',
        'project1.work4': '基于 <span class="tech-tag">PyQt5</span> 开发垃圾分类检测系统，支持图片/视频流分析。',
        'project1.github': 'GitHub 链接',
        'project2.title': '领感智体——多场景适用型体育智能化解决方案',
        'project2.role': '国家级大创 · 重要成员',
        'project2.desc': '基于计算机视觉与边缘计算的人体姿态捕捉与动作评估系统。',
        'project2.workTitle': '主要工作：',
        'project2.work1': '多 <span class="tech-tag">Kinect</span> 传感器空间标定与骨骼点坐标对齐。',
        'project2.work2': '调用 <span class="tech-tag">OpenPose</span> 提取骨骼点，以 MPJPE 指标与 Kinect 真值对比并微调。',
        'project2.work3': '姿态评估算法测试及标准库动作比对分析。',
        'project3.title': '车牌识别系统',
        'project3.role': '课程设计 · 主要负责人',
        'project3.desc': '完整车牌检测识别流程，应对光照、倾斜、模糊等真实场景。',
        'project3.workTitle': '主要工作：',
        'project3.work1': '颜色特征+边缘检测定位车牌，倾斜校正与预处理。',
        'project3.work2': '垂直投影法分割字符，<span class="tech-tag">OCR</span> 识别加规则后处理。',
        'project3.work3': '多光照多角度测试与失败案例分析。',
        'contactSection.title': '联系方式',
        'social.xiaohongshu': '小红书号：待补充',
        'honors.title': '荣誉奖项',
        'honors.item1': '国家级大学生创新创业训练项目 结项',
        'honors.item2': '国家励志奖学金（三次）',
        'honors.item3': '山东财经大学二等奖学金（四次）',
        'honors.item4': '山东财经大学"三千计划"优秀团队（团队负责人）',
        'language.title': '语言能力',
        'language.english': '英语 CET-6 / CET-4',
        'language.mandarin': '普通话二级甲等'
    },
    en: {
        'nav.education': 'Education',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills & Languages',
        'nav.honors': 'Honors & Awards',
        'nav.contact': 'Contact',
        'profile.name': 'Zheng Yuanyuan',
        'profile.title': 'AI · Control Science and Engineering (M.Eng. Candidate)',
        'hero.status': 'Open to opportunities. ',
        'hero.details': 'Details ↓',
        'hero.viewProjects': 'View My Projects →',
        'skills.title': 'CORE SKILLS',
        'skills.sectionTitle': 'Skills & Languages',
        'skills.techSkills': 'Technical Skills',
        'skills.languageSkills': 'Languages',
        'skills.dataStructures': 'Data Structures & Algorithms',
        'skills.mlDl': 'Machine Learning / Deep Learning',
        'contact.title': 'Contact',
        'contact.location': 'Hefei, Anhui',
        'contact.party': 'CPC Member',
        'education.title': 'Education',
        'education.sdufe': 'Shandong University of Finance and Economics',
        'education.bucea': 'Beijing University of Civil Engineering and Architecture',
        'education.undergraduate': 'Artificial Intelligence, Bachelor\'s',
        'education.graduate': 'Control Science and Engineering, Master\'s (Admitted)',
        'education.period': 'Starting Sept 2026',
        'education.courses': 'Major Courses',
        'projects.title': 'Projects',
        'project1.title': 'YOLOv5-based Garbage Classification Algorithm Research',
        'project1.role': 'Graduation Project · Lead Researcher',
        'project1.desc': 'Improved YOLOv5 to address challenges in garbage classification including large scale variations, frequent occlusions, and class imbalance.',
        'project1.workTitle': 'Key Contributions & Achievements:',
        'project1.work1': 'Introduced <span class="tech-tag">CBAM</span> attention mechanism to enhance feature extraction.',
        'project1.work2': 'Designed <span class="tech-tag">Focal-CIoU</span> joint loss function to improve class imbalance and localization bias.',
        'project1.work3': 'Robustness validation: stable under ±8% brightness fluctuation, 30% noise, and partial occlusion.',
        'project1.work4': 'Developed garbage classification detection system based on <span class="tech-tag">PyQt5</span>, supporting image/video stream analysis.',
        'project1.github': 'GitHub Link',
        'project2.title': 'Lingan Zhitai—Multi-Scenario Sports Intelligence Solution',
        'project2.role': 'National Innovation Project · Key Member',
        'project2.desc': 'Human pose capture and action assessment system based on computer vision and edge computing.',
        'project2.workTitle': 'Key Contributions:',
        'project2.work1': 'Multi-<span class="tech-tag">Kinect</span> sensor spatial calibration and skeleton point coordinate alignment.',
        'project2.work2': 'Utilized <span class="tech-tag">OpenPose</span> for skeleton point extraction, fine-tuned using MPJPE metric against Kinect ground truth.',
        'project2.work3': 'Pose assessment algorithm testing and comparison with standard action libraries.',
        'project3.title': 'License Plate Recognition System',
        'project3.role': 'Course Project · Lead Developer',
        'project3.desc': 'Complete license plate detection and recognition pipeline addressing real-world scenarios including lighting, tilt, and blur.',
        'project3.workTitle': 'Key Contributions:',
        'project3.work1': 'Color feature + edge detection for license plate localization, tilt correction and preprocessing.',
        'project3.work2': 'Vertical projection method for character segmentation, <span class="tech-tag">OCR</span> recognition with rule-based post-processing.',
        'project3.work3': 'Multi-lighting and multi-angle testing with failure case analysis.',
        'contactSection.title': 'Contact',
        'social.xiaohongshu': 'Xiaohongshu: To be added',
        'honors.title': 'Honors & Awards',
        'honors.item1': 'National College Student Innovation and Entrepreneurship Training Program - Completed',
        'honors.item2': 'National Encouragement Scholarship (3 times)',
        'honors.item3': 'Shandong University of Finance and Economics Second-Class Scholarship (4 times)',
        'honors.item4': 'Shandong University of Finance and Economics "Three Thousand Plan" Excellent Team (Team Leader)',
        'language.title': 'Language Skills',
        'language.english': 'English: CET-6 / CET-4',
        'language.mandarin': 'Mandarin: Level 2, Grade A'
    }
};

// 当前语言
let currentLang = 'zh';

// 切换语言
function switchLanguage(lang) {
    currentLang = lang;
    
    // 更新语言按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // 更新 HTML lang 属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

// 语言切换按钮事件监听
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        switchLanguage(lang);
    });
});

// 平滑滚动导航
document.querySelectorAll('.navbar-menu a, .btn-primary, .btn-secondary').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // 只处理锚点链接
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// 技能标签悬停效果
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'translateY(-2px)';
        tag.style.boxShadow = '0 4px 12px rgba(14, 165, 233, 0.3)';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'translateY(0)';
        tag.style.boxShadow = 'none';
    });
});

// 滚动时的动画效果
function handleScrollAnimations() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight * 0.8) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// 初始化动画
function initAnimations() {
    // 初始化卡片动画
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // 触发初始动画
    handleScrollAnimations();
    
    // 滚动事件监听
    window.addEventListener('scroll', handleScrollAnimations);
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    // 默认显示中文
    switchLanguage('zh');
});