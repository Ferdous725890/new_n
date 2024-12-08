import React from 'react';

const Footer = () => {
  return (
    <div className='bg-neutral'>
      <div className='container w-11/12 mx-auto'>
      <footer className="footer bg-neutral text-neutral-content p-10">
        {/* Gaming Review Related Sections */}
        <nav>
          <h6 className="footer-title">Gaming Reviews</h6>
          <a className="link link-hover">Latest Reviews</a>
          <a className="link link-hover">Top Rated Games</a>
          <a className="link link-hover">Upcoming Games</a>
          <a className="link link-hover">Game Reviews by Genre</a>
        </nav>

        {/* Community Section */}
        <nav>
          <h6 className="footer-title">Community</h6>
          <a className="link link-hover">Forums</a>
          <a className="link link-hover">User Reviews</a>
          <a className="link link-hover">Game Discussions</a>
          <a className="link link-hover">Tournaments</a>
        </nav>

        {/* Social Media Links */}
        <nav>
          <h6 className="footer-title">Follow Us</h6>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">YouTube</a>
        </nav>

        {/* Legal Section */}
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
          <a className="link link-hover">Copyright Notice</a>
        </nav>
      </footer>

      {/* Footer Bottom with additional information */}
      <div className="footer footer-center p-4 bg-neutral text-neutral-content">
        <p>© 2024 Game Review Site. All rights reserved.</p>
        <p>Made with ❤️ for gaming enthusiasts.</p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
