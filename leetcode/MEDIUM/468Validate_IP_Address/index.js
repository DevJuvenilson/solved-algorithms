/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    if (queryIP.includes('.')) {
        return isValidIPv4(queryIP) ? "IPv4" : "Neither";
    } else if (queryIP.includes(':')) {
        return isValidIPv6(queryIP) ? "IPv6" : "Neither";
    } else {
        return "Neither";
    }
};

const isValidIPv4 = (ip) => {
    const parts = ip.split('.');
    if (parts.length !== 4) return false;

    return parts.every(part => {
        if (!/^\d+$/.test(part)) return false;
        if (part.length > 1 && part[0] === '0') return false;
        const num = Number(part);
        return num >= 0 && num <= 255;
    });
};

const isValidIPv6 = (ip) => {
    const parts = ip.split(':');
    if (parts.length !== 8) return false;

    const hex = /^[0-9a-fA-F]{1,4}$/;

    return parts.every(part => hex.test(part));
};

console.log(validIPAddress("172.16.254.1")); // Expected output: "IPv4"
console.log(validIPAddress("2001:0db8:85a3:0000:0000:8a2e:0370:7334")); // Expected output: "IPv6"
console.log(validIPAddress("256.256.256.256")); // Expected output: "Neither"