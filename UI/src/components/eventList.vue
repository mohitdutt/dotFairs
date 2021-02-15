<template>
  <div style="margin:60px;">
    <h1>Events</h1>
    <div class="row">
      <article class="card fl-left" style="background: #ffffff;">
        <section class="date">
          <time datetime="23th feb">
            <span
              ><img
                style="width: 85px; height: 75px;"
                src="https://i.picsum.photos/id/382/536/354.jpg?hmac=OXNhlcg_bVlBv2d1CWO6JyCSCWhawXUS0jAovmc_3mk"
            /></span>
          </time>
        </section>
        <section class="card-cont">
          <h3>Auto Expo 2020</h3>
          <div class="even-date">
            <i class="fa fa-calendar"></i>
            <time>
              <span>wednesday 28 december 2014</span>
              <span>08:55pm to 12:00 am</span>
            </time>
          </div>
          <div class="even-info">
            <i class="fa fa-map-marker"></i>
            <p>nexen square for people australia, sydney</p>
          </div>
          <!-- <a href="#">tickets</a> -->
          <div class="even-info mt-3" style="">
            <span
              style="background: #2770702e; border-radius: 6px; padding: 4px;"
              >mechanical</span
            >
            <span>automobile</span>
          </div>
        </section>
      </article>
      <article class="card fl-left">
        <section class="date">
          <time datetime="23th feb">
            <span
              ><img
                style="width: 85px; height: 75px;"
                src="https://i.picsum.photos/id/382/536/354.jpg?hmac=OXNhlcg_bVlBv2d1CWO6JyCSCWhawXUS0jAovmc_3mk"
            /></span>
          </time>
        </section>
        <section class="card-cont">
          <small>dj khaled</small>
          <h3>live in sydney</h3>
          <div class="even-date">
            <i class="fa fa-calendar"></i>
            <time>
              <span>wednesday 28 december 2014</span>
              <span>08:55pm to 12:00 am</span>
            </time>
          </div>
          <div class="even-info">
            <i class="fa fa-map-marker"></i>
            <p>nexen square for people australia, sydney</p>
          </div>
          <a href="#">tickets</a>
        </section>
      </article>
    </div>
    <div class="row">
      <article class="card fl-left">
        <section class="date">
          <time datetime="23th feb">
            <span
              ><img
                style="width: 85px; height: 75px;"
                src="https://i.picsum.photos/id/382/536/354.jpg?hmac=OXNhlcg_bVlBv2d1CWO6JyCSCWhawXUS0jAovmc_3mk"
            /></span>
          </time>
        </section>
        <section class="card-cont">
          <small>dj khaled</small>
          <h3>live in sydney</h3>
          <div class="even-date">
            <i class="fa fa-calendar"></i>
            <time>
              <span>wednesday 28 december 2014</span>
              <span>08:55pm to 12:00 am</span>
            </time>
          </div>
          <div class="even-info">
            <i class="fa fa-map-marker"></i>
            <p>nexen square for people australia, sydney</p>
          </div>
          <a href="#">tickets</a>
        </section>
      </article>
      <article class="card fl-left">
        <section class="date">
          <time datetime="23th feb">
            <span
              ><img
                style="width: 85px; height: 75px;"
                src="https://i.picsum.photos/id/382/536/354.jpg?hmac=OXNhlcg_bVlBv2d1CWO6JyCSCWhawXUS0jAovmc_3mk"
            /></span>
          </time>
        </section>
        <section class="card-cont">
          <small>dj khaled</small>
          <h3>live in sydney</h3>
          <div class="even-date">
            <i class="fa fa-calendar"></i>
            <time>
              <span>wednesday 28 december 2014</span>
              <span>08:55pm to 12:00 am</span>
            </time>
          </div>
          <div class="even-info">
            <i class="fa fa-map-marker"></i>
            <p>nexen square for people australia, sydney</p>
          </div>
          <a href="#">tickets</a>
        </section>
      </article>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Oswald");
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

body {
  background-color: #dadde6;
  font-family: arial;
}

.fl-left {
  float: left;
}

.fl-right {
  float: right;
}

.container {
  width: 90%;
  margin: 100px auto;
}

h1 {
  text-transform: uppercase;
  font-weight: 900;
  border-left: 10px solid #fec500;
  padding-left: 10px;
  margin-bottom: 30px;
}

.row {
  overflow: hidden;
}

.card {
  display: table-row;
  width: 49%;
  background-color: #fff;
  color: #989898;
  margin-bottom: 10px;
  font-family: "Oswald", sans-serif;
  /* text-transform: uppercase; */
  border-radius: 4px;
  position: relative;
}

.card + .card {
  margin-left: 2%;
}

.date {
  display: table-cell;
  width: 25%;
  position: relative;
  text-align: center;
  border-right: 2px dashed #dadde6;
}

.date:before,
.date:after {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  background-color: #dadde6;
  position: absolute;
  top: -15px;
  right: -15px;
  z-index: 1;
  border-radius: 50%;
}

.date:after {
  top: auto;
  bottom: -15px;
}

.date time {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.date time span {
  display: block;
}

.date time span:first-child {
  color: #2b2b2b;
  font-weight: 600;
  font-size: 250%;
}

.date time span:last-child {
  /* text-transform: uppercase; */
  font-weight: 600;
  margin-top: -10px;
}

.card-cont {
  display: table-cell;
  width: 75%;
  font-size: 85%;
  padding: 10px 10px 30px 50px;
}

.card-cont h3 {
  color: #3c3c3c;
  font-size: 130%;
}

.row:last-child .card:last-of-type .card-cont h3 {
  text-decoration: line-through;
}

.card-cont > div {
  display: table-row;
}

.card-cont .even-date i,
.card-cont .even-info i,
.card-cont .even-date time,
.card-cont .even-info p {
  display: table-cell;
}

.card-cont .even-date i,
.card-cont .even-info i {
  padding: 5% 5% 0 0;
}

.card-cont .even-info p {
  padding: 30px 50px 0 0;
}

.card-cont .even-date time span {
  display: block;
}

.card-cont a {
  display: block;
  text-decoration: none;
  width: 80px;
  height: 30px;
  background-color: #d8dde0;
  color: #fff;
  text-align: center;
  line-height: 30px;
  border-radius: 2px;
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.row:last-child .card:first-child .card-cont a {
  background-color: #037fdd;
}

.row:last-child .card:last-child .card-cont a {
  background-color: #f8504c;
}

@media screen and (max-width: 860px) {
  .card {
    display: block;
    float: none;
    width: 100%;
    margin-bottom: 10px;
  }
  .card + .card {
    margin-left: 0;
  }
  .card-cont .even-date,
  .card-cont .even-info {
    font-size: 75%;
  }
}
</style>
