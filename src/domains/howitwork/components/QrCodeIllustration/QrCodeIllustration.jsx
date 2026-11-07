function QrCodeIllustration({ className = '' }) {
  return (
    <svg
      className={`how-qr-mark ${className}`.trim()}
      viewBox="0 0 120 120"
      role="img"
      aria-label="QR code illustration"
    >
      <rect width="120" height="120" rx="24" fill="currentColor" opacity="0.08" />
      <g fill="none" stroke="currentColor" strokeWidth="7">
        <rect x="17" y="17" width="32" height="32" rx="4" />
        <rect x="25" y="25" width="16" height="16" rx="1" />
        <rect x="71" y="17" width="32" height="32" rx="4" />
        <rect x="79" y="25" width="16" height="16" rx="1" />
        <rect x="17" y="71" width="32" height="32" rx="4" />
        <rect x="25" y="79" width="16" height="16" rx="1" />
      </g>
      <g fill="currentColor">
        <rect x="62" y="61" width="13" height="13" rx="2" />
        <rect x="82" y="59" width="10" height="10" rx="2" />
        <rect x="99" y="58" width="8" height="8" rx="2" />
        <rect x="59" y="82" width="10" height="10" rx="2" />
        <rect x="76" y="79" width="14" height="14" rx="2" />
        <rect x="98" y="78" width="9" height="9" rx="2" />
        <rect x="59" y="99" width="8" height="8" rx="2" />
        <rect x="73" y="99" width="9" height="9" rx="2" />
        <rect x="91" y="97" width="16" height="10" rx="2" />
      </g>
    </svg>
  )
}

export default QrCodeIllustration
