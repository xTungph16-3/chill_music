const musicList = document.querySelector(".music-list ul");

musicList.addEventListener("click", (e) => {
    const clickedItem = e.target.closest("li");
    if (clickedItem) {
        // Xóa highlight từ tất cả các bài hát
        musicList.querySelectorAll("li").forEach(item => {
            item.classList.remove("highlighted");
        });
        
        // Thêm highlight cho bài hát được chọn
        clickedItem.classList.add("highlighted");
        
        // Xử lý logic chơi nhạc ở đây (nếu có)
        // ...
    }
});