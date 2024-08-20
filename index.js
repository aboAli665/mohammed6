document.getElementById('changeColorBtn').addEventListener('click', function() {
    // تعريف مجموعة من الألوان
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0F0F0', '#F57F33'];
    
    // اختيار لون عشوائي من المجموعة
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // تغيير لون خلفية الجسم
    document.body.style.backgroundColor = randomColor;
});
