document.addEventListener('DOMContentLoaded', function() {
    const correctPassword = '1234';  // كلمة المرور الصحيحة (يمكنك تغييرها)
    const loginDialog = document.getElementById('login-dialog');
    const adminContent = document.getElementById('admin-content');
    const loginButton = document.getElementById('login-btn');
    const passwordInput = document.getElementById('admin-password');
    const errorMessage = document.getElementById('error-message');

    // عرض مربع حوار رمز الدخول عند تحميل الصفحة
    loginDialog.style.display = 'flex';

    // التحقق من رمز الدخول عند الضغط على زر "دخول"
    loginButton.addEventListener('click', function() {
        const enteredPassword = passwordInput.value;

        if (enteredPassword === correctPassword) {
            // إخفاء مربع الحوار وعرض المحتوى
            loginDialog.style.display = 'none';
            adminContent.style.display = 'block';
        } else {
            // إظهار رسالة الخطأ
            errorMessage.style.display = 'block';
        }
    });
});
