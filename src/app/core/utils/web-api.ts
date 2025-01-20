if (navigator.share) {
  navigator
    .share({
      title: 'Check this nut',
      text: 'This is a great article',
      url: 'https://example.com',
    })
    .then(() => {
      console.log('Content shared successfully');
    })
    .catch((err) => {
      console.log('Failed to share: ', err);
    });
}

if (Notification.permission === 'granted') {
  new Notification('You have a new message!');
} else {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === 'granted') {
      new Notification('You have a new message!');
    }
  });
}

const formattere = new Date(Date.UTC(2024, 10, 23, 12, 45, 24, 768));

const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
});

// Alternatives
// Date.fns or Moment.js
