/**
 * Academic Website JavaScript
 * 个人学术网站交互功能
 */

// ===============================
// 滚动动画功能
// ===============================

/**
 * 检测元素是否在视窗中，添加动画效果
 */
function animateOnScroll() {
    const elements = document.querySelectorAll('.scroll-animation');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// ===============================
// 导航栏功能
// ===============================

/**
 * 导航栏滚动效果
 */
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
}

/**
 * 平滑滚动到锚点
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===============================
// 统计数字动画
// ===============================

/**
 * 数字递增动画效果
 */
function animateNumbers() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/\D/g, ''));
        const symbol = stat.textContent.replace(/\d/g, '');
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + symbol;
        }, 50);
    });
}

// ===============================
// 页面加载检测
// ===============================

/**
 * 检测页面加载状态
 */
function checkPageLoad() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeWebsite);
    } else {
        initializeWebsite();
    }
}

// ===============================
// 主初始化函数
// ===============================

/**
 * 网站初始化函数
 */
function initializeWebsite() {
    // 初始化平滑滚动
    initSmoothScrolling();
    
    // 初始化滚动动画
    animateOnScroll();
    
    // 添加滚动事件监听器
    window.addEventListener('scroll', function() {
        handleNavbarScroll();
        animateOnScroll();
    });
    
    // 页面加载完成后触发动画
    window.addEventListener('load', function() {
        animateOnScroll();
        // 延迟启动数字动画，确保元素可见
        setTimeout(animateNumbers, 1000);
    });
    
    // 添加窗口大小改变事件监听器
    window.addEventListener('resize', function() {
        // 重新计算动画
        animateOnScroll();
    });
}

// ===============================
// 工具函数
// ===============================

/**
 * 防抖函数
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * 节流函数
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===============================
// 性能优化的滚动事件
// ===============================

// 使用节流优化滚动事件性能
const optimizedScrollHandler = throttle(function() {
    handleNavbarScroll();
    animateOnScroll();
}, 16); // 约60fps

// 替换原始滚动事件监听器
window.addEventListener('scroll', optimizedScrollHandler);

// ===============================
// 启动网站
// ===============================

// 检查页面加载状态并初始化
checkPageLoad();