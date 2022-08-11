import banner from '~/assets/images/Banner.jpg';

var heroStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${banner}")`
}
export default function BlogIndexRoute() {
    return (
      <div>
        <div className="banner-image" style={heroStyle}></div>
      </div>
    );
  }