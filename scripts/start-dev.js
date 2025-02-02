const { networkInterfaces } = require('os');
const { spawn } = require('child_process');

// Get IP address
function getLocalIpAddress() {
    const nets = networkInterfaces();
    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
            if (net.family === 'IPv4' && !net.internal) {
                return net.address;
            }
        }
    }
    return '0.0.0.0'; // fallback to all interfaces if no specific IP found
}

const ip = getLocalIpAddress();
console.log(`\x1b[32m%s\x1b[0m`, `Starting development server...`);
console.log(`Local: \x1b[36mhttp://localhost:3000\x1b[0m`);
console.log(`Network: \x1b[36mhttp://${ip}:3000\x1b[0m`);

// Start Next.js development server
const nextDev = spawn('next', ['dev', '-H', ip], {
    stdio: 'inherit',
    shell: true
});

nextDev.on('error', (err) => {
    console.error('Failed to start development server:', err);
});
