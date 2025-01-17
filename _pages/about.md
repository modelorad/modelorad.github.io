---
layout: about
title: about
permalink: /
subtitle: <a href='https://www.h-ka.de/en/ieem/projects/modelo-rad'> A project at the Hochschule Karlsruhe</a>.

profile:
  align: right
  image: About_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    _Assessing cycling quality_

news: true # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page
---

The objective of MODELO-Rad is to develop a tool for high-resolution, route- and cyclist-type-dependent simulation of cycling. The simulation tool models the biomechanical processes of cycling from the cyclists’ point of view in terms of: Performance, speed, travel time, interaction with other road users, comfort, etc. It enables an assessment of the quality of travel processes for existing and future cycling infrastructure from the perspective of cyclists. The tool allows to virtually assess the impact of cycling infrastructure before real implementation and therefore to perform integrated and strategic planning. The project thus addresses the goal of the NRVP 3.0 to improve traffic conditions for cycling in Germany.
<a href="javascript:void(0);" onclick="toggleMoreInfo()"> More Information > </a>

<div id="more-info" style="display: none; clear: both; width: 100%;">
  <div class="about-section">
    <div class="text" style="width: 100%;">
      <p>The simulation tool is addressed to the municipal administration, engineering offices and all actors involved in cycling planning and cycling promotion. In order to develop a tool that is most practical and usable in a variety of ways, requirements are collected from the participating practice partners, which are taken into account in the development of the simulation tool as well as the associated model. In this way, cycling planning and cycling promotion can be supported in the following tasks:
      - Decision support for bike route/infrastructure alignment alternatives being planned (identification of alternative to minimize travel time, power requirements, etc.);
      - Identification of optimization needs for existing and planned bicycle routes/infrastructure in terms of time loss, performance, and safety
      - Area-wide evaluation of bicycle infrastructure and identification of sections with potential for improvement (high performance needs, large travel time losses, etc.);
      - Estimation of bicycle travel times for travel time comparisons with other transportation modes; and
      - Determination of the effect of infrastucture gap closures and expansion measures in the cycling network on travel time and performance requirements as a basis for cost-benefit considerations
      
      By using the simulation, the perspective of cyclists can represent a quality grade in planning and evaluating cycling infrastructure. For this purpose, the tool can be used flexibly for already existing or future infrastructure and can be useful for the consideration of single infrastructure elements up to municipal and supraregional cycling networks. Furthermore, a standardization of the planning processes based on the uniform impact variables of cycling provided by the tool becomes possible.</p>
    </div>
    <div class="profile" style="width: 100%; margin-top: 20px;">
      <img src="/assets/img/about_pic3.jpg" alt="Profile Picture" style="width: 100%; height: auto;">
    </div>
  </div>
</div>

<style>
  .about-section {
    width: 100%;
  }
  .text {
    width: 100%;
  }
  .profile img {
    width: 100%;
    height: auto;
  }
</style>


<script>
  function toggleMoreInfo() {
    var moreInfo = document.getElementById("more-info");
    if (moreInfo.style.display === "none") {
      moreInfo.style.display = "block";
    } else {
      moreInfo.style.display = "none";
    }
  }
</script>