import Link from 'next/link';
import Title from '../../typography/title';
import { mdiGithub } from '@mdi/js';
import Icon from '@mdi/react';
import BasicButton from '../../buttons/basicButton';
import colors from '../../../styles/colors';
import { useRouter } from 'next/router';

// const paths = [{ path: '/mentors', name: 'מנטורים' }];
const paths = [];

const Navbar = () => {
  const { asPath } = useRouter();

  return (
    <div className="navbar">
      <div className="layout__container navbar__container">
        <div className="navbar__wrapper">
          <Link shallow href="/">
            <a>
              <img className="navbar__logo" src="/images/logo.png" />
            </a>
          </Link>
          <div className="navbar__navs">
            <Link shallow href="/">
              <a>
                <Title className="navbar__title">קהילת Pull Request</Title>
              </a>
            </Link>
            {paths && (
              <div className="navbar__tabs">
                {paths.map(({ path, name }, i) => (
                  <Link key={path + name + i} shallow href={path}>
                    <a className={`navbar__tab ${asPath === path && 'navbar__tab-active'}`}>
                      {name}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="navbar__wrapper">
          <BasicButton>
            <p className="navbar__btn">
              <span>הוסיפו אותי</span> <Icon className="navbar__btn--icon" path={mdiGithub} />
            </p>
          </BasicButton>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          color: white;
          height: 150px;
          background-color: #242831;
          display: flex;
          align-items: center;
          box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.25);
          width: 100%;
        }

        .navbar__wrapper {
          display: flex;
          align-items: center;
        }

        .navbar__container {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .navbar__btn {
          display: flex;
          justify-content: center;
          align-items: center;
          white-space: nowrap;
          width: 150px;
        }

        .navbar__btn > span {
          // font-size: 2rem;
          margin-left: 10px;
        }

        .navbar__logo {
          width: 90px;
          height: 90px;
          margin-left: 25px;
        }

        .navbar__title {
          font-size: 2.2rem;
        }

        .navbar__navs {
          display: flex;
          align-items: center;
          font-size: 2.2rem;
        }

        .navbar__tabs {
          display: flex;
          margin-right: 30px;
        }

        .navbar__tab {
          position: relative;
          transition: color 0.2s ease-in-out;
          margin-left: 20px;
        }

        .navbar__tab:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: ${colors.secondary_color};
          transition: width 0.3s ease-out;
        }

        .navbar__tab-active.navbar__tab:after,
        .navbar__tab:hover:after {
          width: 100%;
        }

        .navbar__tab-active.navbar__tab,
        .navbar__tab:hover {
          color: ${colors.secondary_color};
        }

        @media only screen and (max-width: 767px) {
          .navbar__navs {
            display: none;
          }
        }

        @media only screen and (max-width: 600px) {
          .navbar {
            height: 100px;
          }
          .navbar__logo {
            width: 70px;
            height: 70px;
          }

          .navbar__btn {
            width: 110px;
          }

          .navbar__btn > span {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
