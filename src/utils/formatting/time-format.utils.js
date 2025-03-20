export const convertUTCToLocalTime = (unixTimestamp, timeDateOption ) => {
    // Create a date object directly from the Unix timestamp
    // No need to adjust with timezone offset since we're formatting it directly
    const date = new Date(unixTimestamp * 1000);

    switch (timeDateOption) {
      case 'time':
        return date.toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: true,  // Use true for AM/PM format
          timeZone: 'UTC'  // Important: treat the time as UTC
        });

      case 'date':
        return date.toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });

      case 'time-and-date':
        return date.toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit', 
          minute: '2-digit',
          hour12: true,  // Use true for AM/PM format
          timeZone: 'UTC'  // Important: treat the time as UTC
        });

        case 'month':
        return date.toLocaleString('en-US', {
          month: 'short',
          timeZone: 'UTC'  // Important: treat the time as UTC
        });
        
        case 'day':
        return date.toLocaleString('en-US', {
          day: 'numeric',
          timeZone: 'UTC'  // Important: treat the time as UTC
        });
        
        case 'year':
        return date.toLocaleString('en-US', {
          year: 'numeric',
          timeZone: 'UTC'  // Important: treat the time as UTC
        });
        
      default:
        break;
    }
}