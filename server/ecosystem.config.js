module.exports = {
  apps: [
    {
      name: "thegivingcircle-backend",
      script: "index.js",
      instances: 1, // Start with 1, can increase later
      exec_mode: "fork", // Use fork mode (simpler than cluster for this app)
      env: {
        NODE_ENV: "production",
        PORT: 3001
      },
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
      autorestart: true,
      max_memory_restart: "500M",
      watch: false
    }
  ]
};

