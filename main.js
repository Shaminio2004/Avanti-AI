// Avanti AI - Main JavaScript File
// Handles all interactions, animations, and functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initParticles();
    initScrollAnimations();
    initMobileMenu();
    initServiceConfigurator();
    initPricingCalculator();
    initBookingSystem();
    initFAQ();
    initCTAs();
    
    console.log('Avanti AI website initialized');
});

// Particle Background System
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    // p5.js sketch for particle system
    new p5(function(p) {
        let particles = [];
        const numParticles = 50;
        
        p.setup = function() {
            const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
            canvas.parent('particles-canvas');
            
            // Create particles
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    vx: p.random(-0.5, 0.5),
                    vy: p.random(-0.5, 0.5),
                    size: p.random(2, 6),
                    opacity: p.random(0.1, 0.3)
                });
            }
        };
        
        p.draw = function() {
            p.clear();
            
            // Update and draw particles
            particles.forEach(particle => {
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = p.width;
                if (particle.x > p.width) particle.x = 0;
                if (particle.y < 0) particle.y = p.height;
                if (particle.y > p.height) particle.y = 0;
                
                // Draw particle
                p.fill(0, 212, 255, particle.opacity * 255);
                p.noStroke();
                p.circle(particle.x, particle.y, particle.size);
            });
            
            // Draw connections
            particles.forEach((particle, i) => {
                particles.slice(i + 1).forEach(other => {
                    const distance = p.dist(particle.x, particle.y, other.x, other.y);
                    if (distance < 100) {
                        p.stroke(0, 212, 255, (1 - distance / 100) * 50);
                        p.strokeWeight(1);
                        p.line(particle.x, particle.y, other.x, other.y);
                    }
                });
            });
        };
        
        p.windowResized = function() {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    // Observe all reveal elements
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

// Mobile Menu
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Service Configurator (Services Page)
function initServiceConfigurator() {
    const configurator = document.getElementById('step-1');
    if (!configurator) return;
    
    let currentStep = 1;
    const totalSteps = 4;
    
    const stepData = {
        1: { title: 'Service Selection', progress: 25 },
        2: { title: 'Complexity Level', progress: 50 },
        3: { title: 'Additional Features', progress: 75 },
        4: { title: 'Timeline', progress: 100 }
    };
    
    const serviceFeatures = {
        agent: [
            { name: 'Natural Language Processing', cost: 2000 },
            { name: 'Multi-platform Integration', cost: 1500 },
            { name: 'Advanced Analytics', cost: 1000 },
            { name: 'Custom Training Data', cost: 2500 },
            { name: '24/7 Monitoring', cost: 800 },
            { name: 'API Integration', cost: 1200 }
        ],
        web: [
            { name: 'AI UX Optimization', cost: 3000 },
            { name: 'Personalization Engine', cost: 2500 },
            { name: 'A/B Testing Suite', cost: 1500 },
            { name: 'Performance Analytics', cost: 1000 },
            { name: 'Mobile Optimization', cost: 1200 },
            { name: 'SEO Integration', cost: 800 }
        ],
        automation: [
            { name: 'Workflow Builder', cost: 2000 },
            { name: 'Custom Integrations', cost: 2500 },
            { name: 'Real-time Monitoring', cost: 1200 },
            { name: 'Advanced Reporting', cost: 1000 },
            { name: 'Error Handling', cost: 800 },
            { name: 'Scalable Architecture', cost: 2000 }
        ]
    };
    
    // Service selection
    document.querySelectorAll('input[name="service"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            document.querySelectorAll('.service-option').forEach(option => {
                option.classList.remove('border-cyan-400');
            });
            e.target.closest('label').querySelector('.service-option').classList.add('border-cyan-400');
            
            // Update features for step 3
            updateFeatureOptions(e.target.value);
        });
    });
    
    // Complexity selection
    document.querySelectorAll('input[name="complexity"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            document.querySelectorAll('#step-2 .border-2').forEach(option => {
                option.classList.remove('border-cyan-400');
            });
            e.target.closest('.border-2').classList.add('border-cyan-400');
        });
    });
    
    // Timeline selection
    document.querySelectorAll('input[name="timeline"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            document.querySelectorAll('#step-4 .border-2').forEach(option => {
                option.classList.remove('border-cyan-400');
            });
            e.target.closest('.border-2').classList.add('border-cyan-400');
        });
    });
    
    // Navigation buttons
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const getQuoteBtn = document.getElementById('get-quote-btn');
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (validateCurrentStep()) {
                if (currentStep < totalSteps) {
                    currentStep++;
                    updateStep();
                }
            }
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                updateStep();
            }
        });
    }
    
    if (getQuoteBtn) {
        getQuoteBtn.addEventListener('click', () => {
            if (validateCurrentStep()) {
                generateQuote();
            }
        });
    }
    
    function updateStep() {
        // Hide all steps
        document.querySelectorAll('.configurator-step').forEach(step => {
            step.classList.remove('active');
        });
        
        // Show current step
        document.getElementById(`step-${currentStep}`).classList.add('active');
        
        // Update progress
        const progressData = stepData[currentStep];
        document.getElementById('current-step').textContent = currentStep;
        document.getElementById('progress-text').textContent = progressData.title;
        document.getElementById('progress-fill').style.width = `${progressData.progress}%`;
        
        // Update buttons
        if (currentStep === 1) {
            prevBtn.classList.add('hidden');
        } else {
            prevBtn.classList.remove('hidden');
        }
        
        if (currentStep === totalSteps) {
            nextBtn.classList.add('hidden');
            getQuoteBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            getQuoteBtn.classList.add('hidden');
        }
    }
    
    function validateCurrentStep() {
        switch (currentStep) {
            case 1:
                return document.querySelector('input[name="service"]:checked') !== null;
            case 2:
                return document.querySelector('input[name="complexity"]:checked') !== null;
            case 3:
                return true; // Features are optional
            case 4:
                return document.querySelector('input[name="timeline"]:checked') !== null;
            default:
                return false;
        }
    }
    
    function updateFeatureOptions(service) {
        const featureContainer = document.getElementById('feature-options');
        if (!featureContainer) return;
        
        const features = serviceFeatures[service] || [];
        featureContainer.innerHTML = '';
        
        features.forEach((feature, index) => {
            const featureDiv = document.createElement('div');
            featureDiv.className = 'flex items-center justify-between p-4 border border-gray-700 rounded-xl hover:border-cyan-400 transition-all';
            featureDiv.innerHTML = `
                <div>
                    <h4 class="font-semibold mb-1">${feature.name}</h4>
                    <p class="text-gray-400 text-sm">+$${feature.cost.toLocaleString()}</p>
                </div>
                <input type="checkbox" class="feature-checkbox" data-cost="${feature.cost}">
            `;
            featureContainer.appendChild(featureDiv);
        });
    }
    
    function generateQuote() {
        const formData = new FormData();
        const service = document.querySelector('input[name="service"]:checked')?.value;
        const complexity = document.querySelector('input[name="complexity"]:checked')?.value;
        const timeline = document.querySelector('input[name="timeline"]:checked')?.value;
        
        // Calculate base price
        let basePrice = {
            agent: { simple: 10000, moderate: 35000, complex: 75000 },
            web: { simple: 8000, moderate: 30000, complex: 65000 },
            automation: { simple: 12000, moderate: 40000, complex: 80000 }
        };
        
        const price = basePrice[service]?.[complexity] || 25000;
        
        // Show success message or redirect to contact form
        alert(`Thank you for your interest! Based on your selections, your estimated project cost is $${price.toLocaleString()}. We'll contact you within 24 hours with a detailed proposal.`);
    }
}

// Pricing Calculator (Pricing Page)
function initPricingCalculator() {
    const calculator = document.getElementById('project-type');
    if (!calculator) return;
    
    const projectType = document.getElementById('project-type');
    const complexitySlider = document.getElementById('complexity-slider');
    const timelineSelect = document.getElementById('timeline-select');
    const multiPlatform = document.getElementById('multi-platform');
    const analytics = document.getElementById('analytics');
    const integrations = document.getElementById('integrations');
    const support = document.getElementById('support');
    
    // Base prices for each project type and complexity
    const basePrices = {
        agent: [5000, 15000, 30000, 50000, 80000],
        web: [4000, 12000, 25000, 40000, 65000],
        automation: [6000, 18000, 35000, 55000, 85000]
    };
    
    const featureCosts = {
        'multi-platform': 2500,
        'analytics': 1500,
        'integrations': 3000,
        'support': 2000
    };
    
    const timelineMultipliers = {
        'flexible': 0.9,
        'standard': 1.0,
        'rush': 1.5
    };
    
    function updateCalculation() {
        const type = projectType.value;
        const complexity = parseInt(complexitySlider.value) - 1; // 0-indexed
        const timeline = timelineSelect.value;
        
        // Calculate base cost
        const baseCost = basePrices[type][complexity];
        
        // Calculate feature costs
        let featureCost = 0;
        if (multiPlatform.checked) featureCost += featureCosts['multi-platform'];
        if (analytics.checked) featureCost += featureCosts['analytics'];
        if (integrations.checked) featureCost += featureCosts['integrations'];
        if (support.checked) featureCost += featureCosts['support'];
        
        // Calculate timeline adjustment
        const timelineAdjustment = (baseCost + featureCost) * (timelineMultipliers[timeline] - 1);
        
        // Calculate total
        const totalCost = baseCost + featureCost + timelineAdjustment;
        
        // Update display
        document.getElementById('base-cost').textContent = `$${baseCost.toLocaleString()}`;
        document.getElementById('timeline-cost').textContent = timelineAdjustment >= 0 ? 
            `+$${timelineAdjustment.toLocaleString()}` : 
            `-$${Math.abs(timelineAdjustment).toLocaleString()}`;
        document.getElementById('features-cost').textContent = `$${featureCost.toLocaleString()}`;
        document.getElementById('total-cost').textContent = `$${totalCost.toLocaleString()}`;
        document.getElementById('estimated-cost').textContent = `$${totalCost.toLocaleString()}`;
    }
    
    // Add event listeners
    [projectType, complexitySlider, timelineSelect, multiPlatform, analytics, integrations, support].forEach(element => {
        if (element) {
            element.addEventListener('change', updateCalculation);
            element.addEventListener('input', updateCalculation);
        }
    });
    
    // Initial calculation
    updateCalculation();
}

// Booking System (Contact Page)
function initBookingSystem() {
    const calendar = document.getElementById('calendar-grid');
    if (!calendar) return;
    
    let currentDate = new Date();
    let selectedDate = null;
    let selectedTime = null;
    
    const timeSlots = [
        '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
        '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
        '4:00 PM', '4:30 PM'
    ];
    
    // Initialize calendar
    renderCalendar();
    renderTimeSlots();
    
    // Calendar navigation
    document.getElementById('prev-month')?.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });
    
    document.getElementById('next-month')?.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });
    
    // Booking form submission
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmission);
    }
    
    function renderCalendar() {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        
        document.getElementById('current-month').textContent = 
            `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
        
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());
        
        calendar.innerHTML = '';
        
        // Generate 42 days (6 weeks)
        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = date.getDate();
            
            // Disable past dates and weekends
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const isWeekend = date.getDay() === 0 || date.getDay() === 6;
            const isPast = date < today;
            const isCurrentMonth = date.getMonth() === currentDate.getMonth();
            
            if (!isCurrentMonth) {
                dayElement.classList.add('disabled');
            } else if (isPast || isWeekend) {
                dayElement.classList.add('disabled');
            } else {
                dayElement.classList.add('available');
                dayElement.addEventListener('click', () => selectDate(date));
            }
            
            calendar.appendChild(dayElement);
        }
    }
    
    function renderTimeSlots() {
        const timeSlotsContainer = document.getElementById('time-slots');
        if (!timeSlotsContainer) return;
        
        timeSlotsContainer.innerHTML = '';
        
        timeSlots.forEach(time => {
            const slotElement = document.createElement('div');
            slotElement.className = 'time-slot';
            slotElement.textContent = time;
            
            // Randomly make some slots unavailable for demo
            const isAvailable = Math.random() > 0.3;
            
            if (isAvailable) {
                slotElement.addEventListener('click', () => selectTime(time));
            } else {
                slotElement.classList.add('unavailable');
            }
            
            timeSlotsContainer.appendChild(slotElement);
        });
    }
    
    function selectDate(date) {
        selectedDate = date;
        
        // Update calendar display
        document.querySelectorAll('.calendar-day').forEach(day => {
            day.classList.remove('selected');
        });
        event.target.classList.add('selected');
        
        updateAppointmentSummary();
    }
    
    function selectTime(time) {
        selectedTime = time;
        
        // Update time slots display
        document.querySelectorAll('.time-slot').forEach(slot => {
            slot.classList.remove('selected');
        });
        event.target.classList.add('selected');
        
        updateAppointmentSummary();
    }
    
    function updateAppointmentSummary() {
        const summary = document.getElementById('appointment-summary');
        const bookBtn = document.getElementById('book-appointment-btn');
        
        if (selectedDate && selectedTime) {
            const dateStr = selectedDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            summary.textContent = `${dateStr} at ${selectedTime}`;
            bookBtn.disabled = false;
            bookBtn.classList.remove('opacity-50');
        } else {
            summary.textContent = 'Please select a date and time above';
            bookBtn.disabled = true;
            bookBtn.classList.add('opacity-50');
        }
    }
    
    function handleBookingSubmission(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const bookingData = Object.fromEntries(formData.entries());
        
        // Add selected date and time
        bookingData.date = selectedDate?.toISOString();
        bookingData.time = selectedTime;
        
        // Simulate API call
        setTimeout(() => {
            showSuccessModal();
            event.target.reset();
            selectedDate = null;
            selectedTime = null;
            updateAppointmentSummary();
            renderCalendar();
            renderTimeSlots();
        }, 1000);
    }
    
    function showSuccessModal() {
        const modal = document.getElementById('success-modal');
        if (modal) {
            modal.classList.remove('hidden');
            
            document.getElementById('close-modal')?.addEventListener('click', () => {
                modal.classList.add('hidden');
            });
        }
    }
}

// FAQ Accordion
function initFAQ() {
    document.querySelectorAll('.faq-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const icon = toggle.querySelector('svg');
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
}

// Call-to-Action Buttons
function initCTAs() {
    // Book a Call buttons
    document.querySelectorAll('.btn-primary').forEach(btn => {
        if (btn.closest('form')) {
            return;
        }
        if (btn.textContent.includes('Book') || btn.textContent.includes('Call')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                // Scroll to booking section or redirect to contact page
                const contactSection = document.querySelector('#booking-form') || 
                                     document.querySelector('.calendar-grid');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                    window.location.href = 'contact.html';
                }
            });
        }
    });
    
    // Floating CTA
    const floatingCTA = document.getElementById('floating-cta');
    if (floatingCTA) {
        floatingCTA.addEventListener('click', () => {
            window.location.href = 'contact.html';
        });
    }
    
    // Service card buttons
    document.querySelectorAll('.card-hover button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (btn.textContent.includes('Learn')) {
                window.location.href = 'services.html';
            } else {
                window.location.href = 'contact.html';
            }
        });
    });
}

// Utility Functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-6 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
        type === 'success' ? 'bg-green-600' : 
        type === 'error' ? 'bg-red-600' : 'bg-blue-600'
    } text-white`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        anime({
            targets: notification,
            translateX: [0, 300],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInQuart',
            complete: () => {
                document.body.removeChild(notification);
            }
        });
    }, 3000);
}

// Handle form submissions with better UX
document.addEventListener('submit', function(e) {
    if (e.target.tagName === 'FORM' && !e.target.id === 'booking-form') {
        e.preventDefault();
        showNotification('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
        e.target.reset();
    }
});

// Smooth scrolling for anchor links
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

console.log('Avanti AI JavaScript loaded successfully');
