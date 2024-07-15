import Policy from './Policy';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('policy-root');
  root.appendChild(Policy());
});