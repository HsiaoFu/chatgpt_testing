// JavaScript 代码用于实现平滑滚动效果
document.addEventListener("DOMContentLoaded", function() {
    var smoothScrollLinks = document.querySelectorAll(".smooth-scroll");

    for (var i = 0; i < smoothScrollLinks.length; i++) {
        smoothScrollLinks[i].addEventListener("click", function(event) {
            event.preventDefault();
            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth" // 平滑滚动效果
                });
            }
        });
    }
});
