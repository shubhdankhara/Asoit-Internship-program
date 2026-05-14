// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeDatePicker();
    setupFormValidation();
    setupFormSubmission();
    setupAnimations();
    console.log('%c✨ Registration Page Loaded!', 'color: #C9A961; font-size: 14px; font-weight: bold;');
});

// ===== DATE PICKER INITIALIZATION =====
function initializeDatePicker() {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
}

// ===== FORM VALIDATION =====
function setupFormValidation() {
    const form = document.getElementById('bookingForm');
    if (!form) return;

    // Real-time validation for email
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (this.value && !isValidEmail(this.value)) {
                this.style.borderColor = '#E74C3C';
            } else {
                this.style.borderColor = '';
            }
        });
    }

    // Real-time validation for phone
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
            if (this.value && !isValidPhone(this.value)) {
                this.style.borderColor = '#E74C3C';
            } else {
                this.style.borderColor = '';
            }
        });
    }

    // Validate on input change
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('change', function() {
            this.style.borderColor = '';
        });
    });
}

// ===== EMAIL VALIDATION =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== PHONE VALIDATION =====
function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

// ===== FORM SUBMISSION =====
function setupFormSubmission() {
    const form = document.getElementById('bookingForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate form
        if (!validateForm()) {
            console.log('Form validation failed');
            return;
        }

        // Collect form data
        const formData = collectFormData();

        // Log to console
        console.log('📅 Reservation Details:', formData);

        // Store in localStorage
        saveToLocalStorage(formData);

        // Show success message
        displaySuccessMessage();

        // Reset form
        form.reset();

        // Optional: Redirect after delay
        setTimeout(() => {
            // Uncomment to redirect to main website:
            // window.location.href = 'caffe-website.html';
        }, 4000);
    });
}

// ===== VALIDATE FORM =====
function validateForm() {
    const requiredFields = ['name', 'email', 'phone', 'date', 'time', 'guests', 'seating'];
    const form = document.getElementById('bookingForm');

    for (let fieldId of requiredFields) {
        const field = document.getElementById(fieldId);
        if (!field || !field.value.trim()) {
            field?.style.borderColor = '#E74C3C';
            console.warn(`Field ${fieldId} is required`);
            return false;
        }
    }

    // Validate email format
    const email = document.getElementById('email').value;
    if (!isValidEmail(email)) {
        document.getElementById('email').style.borderColor = '#E74C3C';
        console.warn('Invalid email format');
        return false;
    }

    // Validate phone format
    const phone = document.getElementById('phone').value;
    if (!isValidPhone(phone)) {
        document.getElementById('phone').style.borderColor = '#E74C3C';
        console.warn('Invalid phone format');
        return false;
    }

    return true;
}

// ===== COLLECT FORM DATA =====
function collectFormData() {
    return {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        city: document.getElementById('city').value.trim(),
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        guests: document.getElementById('guests').value,
        seating: document.getElementById('seating').value,
        occasion: document.getElementById('occasion').value.trim(),
        notes: document.getElementById('notes').value.trim(),
        timestamp: new Date().toLocaleString('en-IN', {
            dateStyle: 'medium',
            timeStyle: 'short',
            timeZone: 'Asia/Kolkata'
        })
    };
}

// ===== SAVE TO LOCALSTORAGE =====
function saveToLocalStorage(formData) {
    try {
        // Get existing reservations or create new array
        let reservations = JSON.parse(localStorage.getItem('caffe_reservations')) || [];
        
        // Add new reservation
        reservations.push(formData);
        
        // Save back to localStorage
        localStorage.setItem('caffe_reservations', JSON.stringify(reservations));
        
        console.log('✓ Reservation saved to localStorage');
        console.log('Total reservations:', reservations.length);
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

// ===== DISPLAY SUCCESS MESSAGE =====
function displaySuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.classList.add('show');

        // Auto-hide after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    }
}

// ===== ANIMATIONS =====
function setupAnimations() {
    // Add fade-in animation to form groups
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`;
    });

    // Add animation keyframes if not already in CSS
    if (!document.querySelector('style[data-animations]')) {
        const style = document.createElement('style');
        style.setAttribute('data-animations', 'true');
        style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== INPUT FOCUS EFFECTS =====
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        // Focus event
        input.addEventListener('focus', function() {
            this.style.borderColor = 'var(--gold)';
            this.style.backgroundColor = 'white';
        });

        // Blur event
        input.addEventListener('blur', function() {
            if (!this.value || this.id === 'city') {
                this.style.borderColor = '#E0D7D0';
                this.style.backgroundColor = '#FAFAFA';
            }
        });

        // Add label color change on input
        input.addEventListener('input', function() {
            const label = this.previousElementSibling;
            if (label && label.tagName === 'LABEL') {
                label.style.color = 'var(--primary)';
            }
        });
    });
});

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', function(event) {
    // Ctrl/Cmd + Enter to submit form
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        const form = document.getElementById('bookingForm');
        if (form && document.activeElement.form === form) {
            form.dispatchEvent(new Event('submit'));
        }
    }
});

// ===== UTILITY: GET ALL RESERVATIONS =====
function getAllReservations() {
    try {
        return JSON.parse(localStorage.getItem('caffe_reservations')) || [];
    } catch (error) {
        console.error('Error retrieving reservations:', error);
        return [];
    }
}

// ===== UTILITY: CLEAR ALL RESERVATIONS =====
function clearAllReservations() {
    if (confirm('Are you sure you want to clear all reservations? This cannot be undone.')) {
        localStorage.removeItem('caffe_reservations');
        console.log('All reservations cleared');
    }
}

// ===== UTILITY: EXPORT RESERVATIONS =====
function exportReservationsAsCSV() {
    const reservations = getAllReservations();
    if (reservations.length === 0) {
        alert('No reservations to export');
        return;
    }

    let csv = 'Name,Email,Phone,City,Date,Time,Guests,Seating,Occasion,Notes,Timestamp\n';
    
    reservations.forEach(r => {
        csv += `"${r.name}","${r.email}","${r.phone}","${r.city}","${r.date}","${r.time}","${r.guests}","${r.seating}","${r.occasion}","${r.notes}","${r.timestamp}"\n`;
    });

    // Create download link
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `caffe-reservations-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ===== CONSOLE HELPERS =====
console.log('%c📞 Caffe Reservation System', 'color: #6F4E37; font-size: 16px; font-weight: bold;');
console.log('%cUseful commands:', 'color: #C9A961; font-size: 12px; font-weight: bold;');
console.log('getAllReservations() - Get all bookings');
console.log('clearAllReservations() - Clear all data');
console.log('exportReservationsAsCSV() - Download as CSV');
