const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
  
    // autoplay: true,
    audio: [
      {
        name: 'Merry Christmas, Mr Lawrence',
        artist: 'echo',
        url: '/images/echo - Merry Christmas, Mr Lawrence.mp3',
        cover: '/images/迷乱的狂欢节.jpg',
      },
      {
        name: "Love In December",
        artist: 'Club 8',
        url: '/images/Club 8 - Love In December.mp3',
        cover: '/images/CLUB8.jpg',
      },
      {
        name: '四季的问候（Cover 魔女宅急便）',
        artist: '北京师范大学附属实验中学高中女声合唱团',
        url: '/images/北京师范大学附属实验中学高中女声合唱团 - 四季的问候（Cover 魔女宅急便）.mp3',
        cover: '/images/season.jpg',
      },
      {
        name: 'Chronos Collapse - La Campanella',
        artist: 'SunsetRay',
        url: '/images/SunsetRay - Chronos Collapse - La Campanella.mp3',
        cover: '/images/迷乱的狂欢节.jpg',
      },
      {
        name: '銀色',
        artist: '麻枝准',
        url: '/images/麻枝准 - 銀色.mp3',
        cover: '/images/AIR.jpg',
      },
      {
        name: 'FLY ME TO THE MOON (On the Street)',
        artist: '高橋洋子',
        url: '/images/高橋洋子 - FLY ME TO THE MOON (On the Street).mp3',
        cover: '/images/迷乱的狂欢节.jpg',
      }
    ]
  });