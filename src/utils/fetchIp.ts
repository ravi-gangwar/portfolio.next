export async function fetchUserIP() {
    try {
      const [ipv4Res, ipv6Res] = await Promise.all([
        fetch("https://api64.ipify.org?format=json"), // IPv6
        fetch("https://api.ipify.org?format=json"), // IPv4
      ]);
  
      const ipv6Data = await ipv6Res.json();
      const ipv4Data = await ipv4Res.json();
  
      return {
        ipv4: ipv4Data.ip || "Unknown",
        ipv6: ipv6Data.ip || "Unknown",
      };
    } catch (error) {
      console.error("Error fetching IPs:", error);
      return { ipv4: "Unknown", ipv6: "Unknown" };
    }
  }
  