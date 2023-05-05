class Utils {
    static getUniqueId(): string {
      const userAgent = navigator.userAgent;
      const platform = navigator.platform;
      const uniqueId = `${userAgent}-${platform}`;
      return uniqueId;
    }
  }
  


  export default Utils