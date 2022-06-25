const data = [
    {
        id: '1',
        image: 'https://i.ytimg.com/vi/Tg1VcwH3gpY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBl1JAGL-hu0K3N5Kc48ECfY7JBzg',
        topic: 'Carly Rae Jepsen - I Really Like You (Celeina Ann Cover)',
        author: 'Celeina Ann Channel',
        view: '11,997,558',
        day: 'Aug 6, 2016',
    },
    {
        id: '2',
        image: 'https://i.ytimg.com/vi/T4NkVmzDjdA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG9kSL7rAPbt3wOnGmzhmWUbHHWw',
        topic: 'Lofi Chill Muốn Em Là - Không Còn Em Là Đời Anh Chẳng Ý Nghĩa Gì Lofi | Nhạc Lofi Chill Tik Tok 2022',
        author: 'Cafe Buồn',
        view: '6',
        day: '4 minutes ago',
    },
    {
        id: '3',
        image: 'https://i.ytimg.com/vi/S7ElVoYZN0g/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7osRSezD8gHg4cNeOnvVOe623IQ',
        topic: 'VÌ MẸ ANH BẮT CHIA TAY | MIU LÊ x KARIK x CHÂU ĐĂNG KHOA | Official MV',
        author: 'Miu Lê Offical',
        view: '30,866,358',
        day: '11 days ago',
    },
    {
        id: '4',
        image: 'https://i.ytimg.com/vi/6hqYXmHmVXQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-DT5zOmKdhu8eQRCKIfrqvMPt2A',
        topic: 'TỪ VỰNG TOEIC 2022 | TỪ ĐA NGHĨA',
        author: 'Anh Le TOEIC',
        view: '666',
        day: '1 day ago 9 minutes, 33 seconds',
    },
    {
        id: '5',
        image: 'https://i.ytimg.com/vi/DUwx3IdXupU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKyx-M1uY1Y-fEhf-DKen1o0ygRQ',
        topic: 'Học "xong" CSS trong 1 clip, code được cái web siêu đẹp',
        author: 'Phạm Huy Hoàng',
        view: '186,988',
        day: '9 months ago 28 minutes',
    },
    {
        id: '6',
        image: 'https://i.ytimg.com/vi/6GqYd8lsdZs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC093_9hVqUaWOzY_LemoiDc9sAtQ',
        topic: '[作業用BGM] 朝から癒される音楽＾＾♪ Morning Playlist - Daily Routine',
        author: 'Daily Routine',
        view: '252,928',
        day: '6 days ago 1 hour, 2 minutes',
    },
    {
        id: '7',
        image: 'https://i.ytimg.com/vi/IzOgf2Ww0OQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDW6k8m--8F4YWt2thlUCmhaJuOPQ',
        topic: 'ENGLISH SPEECH | TAYLOR SWIFT: Cringe is Unavoidable (English Subtitles)',
        author: 'English Speeches',
        view: '122,237',
        day: '4 weeks ago 24 minutes',
    },
    {
        id: '8',
        image: 'https://i.ytimg.com/vi/5D8KR6_wPU0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDA2mhC-f3cC9L3a8ZgovWof05Dvw',
        topic: 'Acoustic 2022 / The Best Acoustic Covers of Popular Songs 2022',
        author: 'Acoustic Greatest Hits',
        view: '8,038,731',
        day: '1 year ago 11 hours, 55 minutes',
    },
]
const youtobeList = document.querySelector('.youtobe__list')
var htmls = data.map(item => {
    return `
    <div class="youtobe__item" id="${item.id}">
        <a href="https://www.youtube.com/watch?v=S7ElVoYZN0g" target="_blank"> <img src="${item.image}" alt=""></a>
        <div class="youtobe__topic">
            <img src="${item.image}" alt="">
            <p>${item.topic}</p>
        </div>
        <div class="youtobe__author">
            <p>${item.author}</p>
            <p><span>${item.view} views </span> - <span>${item.day}</span></p>
        </div>
    </div>
    `
});
youtobeList.innerHTML = htmls.join('')