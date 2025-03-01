export const convertUTCToLocalTime = (unixTimestamp) => {
    // Create a date object directly from the Unix timestamp
    // No need to adjust with timezone offset since we're formatting it directly
    const date = new Date(unixTimestamp * 1000);
    
    // Format the time in the desired timezone
    return date.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true,  // Use true for AM/PM format
        timeZone: 'UTC'  // Important: treat the time as UTC
    });
}

export const formatUnixTimestampToDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }