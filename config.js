const config = {
  // REQUIRED
  appName: "Escuelita Starter",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Escuelita Starter is a template to start creating your own projects FAST",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "escuelitamaker.com",
  email: {
    supportEmail: "escuelitamaker@gmail.com",
    noReplyEmail: "no-reply@escuelitamaker.com",
  },
  socials: {
    twitter: "https://twitter.com/escuelitamaker",
    youtube: "https://www.youtube.com/@escuelitamaker",
    facebook: "https://www.facebook.com/escuelitamaker",
    instagram: "https://www.instagram.com/escuelitamaker",
    linkedin: "https://www.linkedin.com/company/escuelitamaker",
    tiktok: "https://www.tiktok.com/@escuelita.maker",
    github: "https://github.com/escuelitamaker",
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/auth/signin",
    // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: "/dashboard",
  },
};

export default config;
