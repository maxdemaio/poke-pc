export const Icons = {
  profileDefault: function ProfileDefaultIcon(props: any) {
    return (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_23_90)">
          <path
            d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z"
            fill="#528EA1"
          />
        </g>
        <defs>
          <clipPath id="clip0_23_90">
            <rect width="50" height="50" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  },

  copy: function CopyIcon(props: any) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12z"
        />
      </svg>
    );
  },

  loading: function LoadingIcon(props: any) {
    return (
      <svg
        className="animate-spin h-5 w-5 text-black"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );
  },
  heart: function HeartIcon(props: any) {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-60 transition-all fill-pink-400 group-hover:opacity-90 group-hover:scale-125 duration-300"
      >
        <path d="M7.99998 14.2333L7.03331 13.3533C3.59998 10.24 1.33331 8.18 1.33331 5.66667C1.33331 3.60667 2.94665 2 4.99998 2C6.15998 2 7.27331 2.54 7.99998 3.38667C8.72665 2.54 9.83998 2 11 2C13.0533 2 14.6666 3.60667 14.6666 5.66667C14.6666 8.18 12.4 10.24 8.96665 13.3533L7.99998 14.2333Z" />
      </svg>
    );
  },

  github: function GithubIcon(props: any) {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.6668 14.6847V12.7714C10.6918 12.4535 10.6488 12.1339 10.5408 11.8339C10.4327 11.5339 10.262 11.2603 10.0401 11.0314C12.1334 10.798 14.3334 10.0047 14.3334 6.36469C14.3333 5.43391 13.9752 4.53882 13.3334 3.86469C13.6373 3.05036 13.6158 2.15026 13.2734 1.35136C13.2734 1.35136 12.4868 1.11802 10.6668 2.33802C9.13868 1.92455 7.52817 1.92455 6.00009 2.33802C4.18009 1.11802 3.39343 1.35136 3.39343 1.35136C3.05101 2.15026 3.02952 3.05036 3.33343 3.86469C2.68684 4.54382 2.32844 5.447 2.33343 6.38469C2.33343 9.99802 4.53342 10.7914 6.62676 11.0514C6.40742 11.278 6.23827 11.5483 6.1303 11.8446C6.02233 12.141 5.97796 12.4567 6.00009 12.7714V14.6847"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.00004 13.3513C4.00004 14 2.33337 13.3513 1.33337 11.3513"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
};
