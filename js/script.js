document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display Slack display name
    const slackDisplayName = document.querySelector('[data-testid="slackDisplayName"]');
    slackDisplayName.textContent = 'Davies Oluwadare';

    // Fetch and display current time in UTC
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    currentTimeUTC.textContent = new Date().toUTCString();

    // Fetch and display current day of the week
    const currentDay = document.querySelector('[data-testid="currentDay"]');
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = new Date().getDay();
    currentDay.textContent = daysOfWeek[dayIndex];
});
