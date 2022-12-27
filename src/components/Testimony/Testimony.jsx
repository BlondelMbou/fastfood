import React from 'react';
import '../../components/Testimony/Testimony.css';
import img2 from '../../assets/images/img2.png';
import img5 from '../../assets/images/img5.png';
import img4 from '../../assets/images/img4.png';

function Testimony() {
  return (
    <section class="comment_section">
      <h4 class="mid-title">Testimony</h4>
      <h2 class="big-dark-blue-title">What People think about us</h2>
      <div class="comments">
        <div class="comment">
          <div>
            <img src={img2} alt="" />
            <h4 className="little-title">Irene kUETE</h4>
          </div>
          <p className="little-title-gray">
            You should comment fire emojis (🔥) on a guy’s post. It’s the
            easiest way to show that you like their post. The fire emoji is also
            used to express adoration, love, or admiration.
          </p>
        </div>

        <div class="comment">
          <div>
            <img src={img5} alt="" />
            <h4 className="little-title">Chrippo kUETE</h4>
          </div>
          <p className="little-title-gray">
            You should comment fire emojis (🔥) on a guy’s post. It’s the
            easiest way to show that you like their post. The fire emoji is also
            used to express adoration, love, or admiration.
          </p>
        </div>
        <div class="comment">
          <div>
            <img src={img4} alt="" />
            <h4 className="little-title">Eleannah kUETE</h4>
          </div>
          <p className="little-title-gray">
            You should comment fire emojis (🔥) on a guy’s post. It’s the
            easiest way to show that you like their post. The fire emoji is also
            used to express adoration, love, or admiration.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
