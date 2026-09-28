const projectData = {
  security: {
    kicker: "EMBEDDED SYSTEM · AUG 2024",
    title: "Security System using Arduino",
    intro: "A low-cost intrusion-detection prototype designed to detect movement with ultrasonic sensing and trigger an alarm response.",
    sections: [
      ["What was it?", "An Arduino-based security prototype using an ultrasonic sensor to detect movement and activate a buzzer."],
      ["Why build it?", "To explore how sensor input can be translated into immediate system behavior for a practical security use case."],
      ["Objective", "Define a reliable detection-and-alert flow that could work without wireless communication and remain suitable for small spaces."],
      ["What I did", "Designed the system behavior, programmed motion detection and buzzer activation, and tested the prototype across multiple scenarios."],
      ["Technologies", "Arduino microcontroller, ultrasonic sensor, buzzer, embedded programming."],
      ["Skills developed", "Embedded programming, sensor integration, system behavior design, testing, sensor-accuracy evaluation and technical documentation."],
      ["Outcome", "A working low-cost security prototype that triggers an audible alert when unauthorized movement is detected."],
      ["Real-world relevance", "The concept can be adapted for basic security monitoring in homes and other small environments where a simple, low-cost alert mechanism is useful."]
    ]
  },
  fire: {
    kicker: "SAFETY PROTOTYPE · MAY 2025",
    title: "Automatic Fire Extinguisher System",
    intro: "An automated fire detection and suppression prototype that responds when flame detection occurs.",
    sections: [
      ["What was it?", "A small-scale automated safety system built around flame detection and heat-sensitive components, with an automatic suppression response."],
      ["Why build it?", "To reduce dependence on manual intervention by exploring an automated response to an early fire signal."],
      ["Objective", "Create and test a detection-to-suppression workflow that initiates automatically when flame detection occurs."],
      ["What I did", "Developed the detection and response prototype, documented its system functions, and tested the automatic triggering mechanism."],
      ["Technologies", "Flame sensors, heat-sensitive components, embedded-system hardware and control logic."],
      ["Skills developed", "Sensor-based automation, system testing, technical documentation and translating safety requirements into system behavior."],
      ["Outcome", "A low-cost fire-safety prototype that automatically initiates suppression when flame detection is triggered."],
      ["Real-world relevance", "The prototype demonstrates how low-cost sensing and automation can support safety systems in small-scale environments."]
    ]
  },
  expense: {
    kicker: "WEB APPLICATION · JAVASCRIPT",
    title: "Expense Tracker",
    intro: "A responsive browser application for managing daily expenses with real-time totals, category visualization and persistent local storage.",
    sections: [
      ["What was it?", "A client-side expense tracking application where users can add, edit and delete entries while seeing totals update in real time."],
      ["Why build it?", "To build a practical web application while applying JavaScript, DOM manipulation, UI design and browser storage."],
      ["Objective", "Create an intuitive expense workflow with useful feedback, category-level visibility and persistence between browser sessions."],
      ["What I did", "Designed the responsive interface, implemented expense CRUD interactions, added real-time calculations, category-wise visualization and Local Storage persistence."],
      ["Technologies", "HTML, CSS, JavaScript, Chart.js and browser Local Storage."],
      ["Skills developed", "DOM manipulation, client-side state management, responsive UI design, data visualization and user-focused interaction design."],
      ["Outcome", "A functional responsive expense tracker with seamless real-time updates and persistent browser data."],
      ["Real-world relevance", "The same client-side patterns apply to dashboards, productivity tools, personal finance interfaces and other data-driven web applications."]
    ]
  }
};

const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");

function openProject(key) {
  const project = projectData[key];
  if (!project) return;

  const evidence = {
    security: [
      ["GitHub repository", "placeholder"],
      ["Screenshots", "placeholder"],
      ["Write-up", "placeholder"],
      ["Demo", "placeholder"],
      ["Technical documentation", "placeholder"]
    ],
    fire: [
      ["GitHub repository", "placeholder"],
      ["Screenshots", "placeholder"],
      ["Write-up", "placeholder"],
      ["Demo", "placeholder"],
      ["Technical documentation", "placeholder"]
    ],
    expense: [
      ["GitHub repository", "placeholder"],
      ["Live demo", "placeholder"],
      ["Screenshots", "placeholder"],
      ["Write-up", "placeholder"],
      ["Technical documentation", "placeholder"]
    ]
  }[key];

  modalContent.innerHTML = `
    <div class="detail-kicker">${project.kicker}</div>
    <h2 id="modalTitle">${project.title}</h2>
    <p class="detail-intro">${project.intro}</p>
    <div class="detail-grid">
      ${project.sections.map(([heading, body]) => `
        <div class="detail-block">
          <h4>${heading}</h4>
          <p>${body}</p>
        </div>
      `).join("")}
    </div>
    <div class="evidence">
      <h4>Evidence & project artifacts</h4>
      <div class="evidence-links">
        ${evidence.map(([label, type]) => type === "placeholder"
          ? `<span class="placeholder">${label} — link to add</span>`
          : `<a href="${type}" target="_blank" rel="noopener">${label} ↗</a>`
        ).join("")}
      </div>
      <p class="detail-intro" style="font-size:11px;margin:15px 0 0;">No project URLs were supplied in the source profile, so these are intentionally placeholders rather than invented links.</p>
    </div>
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
}

function closeProject() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", event => {
    if (event.target.closest("a")) return;
    openProject(card.dataset.project);
  });
});

document.querySelectorAll("[data-close-modal]").forEach(el => {
  el.addEventListener("click", closeProject);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) closeProject();
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
