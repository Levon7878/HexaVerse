<template>
  <div class="meet-container">
    <!-- Главный блок команды -->
    <div class="team-block ">
      <div class="team-img-box " >
        <img src="../Img/BusinessMW/bwm2.jpg" alt="Team Image"  />
        <div class="text-team-box">
          <div class="meet-team-text ">
            <h4>TEAM</h4>
            <h2>Meet Our Team</h2>
            <p>
              Commodo elementum, sed imperdiet nunc euismod etiam aliquet
              viverra. Adipiscing nunc condimentum risus id. Aquam mattis magna
              facilisi fermentum, euismod. Porttitor sit tincidunt dictum
              facilisi eget orci velit. Nulla laoreet nunc gravida augue aenean
              sed elementum, in.
            </p>
          </div>
          <div class="nick-name">
            <h4>John William</h4>
            <p>OUR FOUNDER</p>
          </div>
          <div class="link-name-block">
            <p>
              Commodo elementum, sed imperdiet nunc euismod etiam aliquet
              viverra.
            </p>
            <div class="link-block">
              <i class="fab fa-linkedin-in"></i>
              <a href="">Linkedin/johnwilliam</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="staff-grid">
      <div class="staff-text-block">
        <h4>TEAM</h4>
        <h2>Meet Our Staff</h2>
        <p>
          TEAM Meet Our Staff Commodo elementum, sed imperdiet nunc euismod
          etiam aliquet viverra enim. Adipiscing nunc condimentum risus id.
          Aquam mattis magna facilisi.
        </p>
      </div>
      <div class="staff-block">
        <div
          class="staff-members-block"
          v-for="staff in teamBlock"
          :key="staff.id"
        >
          <div class="img-staff-block">
            <img :src="staff.image" class="staff-img" alt="Staff Image" />
            <div class="img-line">
              <img :src="staff.imageLine" alt="" />
            </div>
          </div>
          <div class="text-staff-block">
            <h4>{{ staff.name }}</h4>
            <p>{{ staff.position }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useMyStore } from "@/store/myStore";
import { computed } from "vue";

export default {
  setup() {
    const store = useMyStore();
    const teamBlock = computed(() => store.teamBlock);

    return {
      teamBlock,
    };
  },
};
</script>

<style scoped>
/* about-block */
.meet-container {
  padding: 150px 0;
}

.meet-team-text h4 {
  color: #00b9c5;
  font-size: 13px;
  letter-spacing: 3px;
  margin-bottom: 5px;
}

.meet-team-text h2 {
  color: white;
  font-size: 54px;
  margin-top: 32px;
}

.team-img-box {
  display: flex;
  gap: 64px;
  max-width: 1170px;
}

.team-block {
  display: flex;
  justify-content: center;
}

.nick-name h4{
  color: aliceblue;
}

.text-team-box {
  max-width: 702px;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
}

.nick-name p {
  color: #00b9c5;
  font-size: 13px;
  letter-spacing: 3px;
  margin-bottom: 5px;
}

.link-name-block p {
  font-size: 17px;
  margin: 32px 0;
  color: white;
}

.link-block i,
a {
  color: #00b9c5;
}

.link-block {
  display: flex;
  align-items: center;
  gap: 15px;
}

.meet-team-text p {
  color: white;
  font-size: 17px;
  margin: 32px 0;
}

/* staff-block */
.staff-grid {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.staff-block {
  max-width: 1240px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
}

.staff-text-block h4 {
  color: #00b9c5;
  font-size: 13px;
  letter-spacing: 3px;
}
.staff-text-block h2 {
  color: #fff;
  font-size: 54px;
  margin-bottom: 10px;
}

.staff-text-block p {
  color: white;
  font-family: sans-serif;
  font-size: 16px;
  margin-bottom: 30px;
}

.staff-text-block {
  text-align: center;
  max-width: 630px;
}

.staff-members-block {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: lightblue;
}

.staff-members-block h4 {
  color: #0e0f20;
  font-family: sans-serif;
  font-size: 16px;
  margin: 10px 0 5px 20px;
}

.staff-members-block p {
  color: #64657d;
  font-size: 12px;
  margin-bottom: 15px;
  padding-left: 20px;
}

.staff-img {
  width: 100%;
  height: 100%;
  max-width: 287px;
  max-height: 305px;
}

.img-staff-block {
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.img-line {
  position: absolute;
  top: 290px;
  right: 0px;
  bottom: 0;
}

.text-staff-block {
  width: 100%;
}

/* staff-block-end */

[class="dark"] .meet-container {
  background: linear-gradient(to bottom, #0d3b66, #051622);
}

[class="light"] .meet-container {
  background-color: aliceblue ;
}
</style>
