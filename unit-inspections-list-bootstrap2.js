// Unit Inspections list mockup (Bootstrap 2 functional prototype)
(() => {
  const TODAY = new Date("2026-01-27T00:00:00");

  const STATUS = {
    PROOF_REQUIRED: "Proof required",
    UPLOADS_IN_PROGRESS: "Uploads in progress",
    PENDING_REVIEW: "Pending review",
    REJECTED: "Rejected",
    COMPLETED: "Completed",
    SCHEDULED: "Scheduled",
  };

  const RESULT = {
    PASS: "Pass",
    FAIL: "Fail",
    INCONCLUSIVE: "Inconclusive",
  };

  const records = [
    {
      inspectionId: "26581",
      buildingName: "Lompoc Gardens",
      unitLine: "800 N L St, #004",
      cityLine: "Lompoc, CA 93436",
      tenantName: "Coleman, Alfred",
      tenantId: "t0012002",
      inspectionType: "Reinspection",
      inspectionStandard: "NSPIRE-V",
      selfCertification: false,
      proofUploadEnabled: true,
      proofUploadRequired: true,
      status: STATUS.REJECTED,
      issueCount: 5,
      proofRequiredCount: 1,
      proofUploadNeededCount: 1,
      issueMeta: "2 uploads saved, 1 pending review, 1 rejected",
      deficiencies24h: 1,
      deficiencies30d: 0,
      deficiencies60d: 0,
      nextDueISO: "2026-01-23",
      otherDueISO: ["2026-01-29", "2026-02-24"],
      inspectedISO: null,
      inspectionResult: null,
      ctaLabel: "Fix & resubmit",
      ctaStyle: "primary",
      detailHref: "inspection-detail-bootstrap2.html",
    },
    {
      inspectionId: "26584",
      buildingName: "Lompoc Gardens",
      unitLine: "800 N L St, #006",
      cityLine: "Lompoc, CA 93436",
      tenantName: "Diaz, Maria",
      tenantId: "t0012003",
      inspectionType: "Reinspection",
      inspectionStandard: "NSPIRE-V",
      selfCertification: false,
      proofUploadEnabled: true,
      proofUploadRequired: true,
      status: STATUS.PROOF_REQUIRED,
      issueCount: 4,
      proofRequiredCount: 3,
      proofUploadNeededCount: 3,
      issueMeta: "3 still need uploads",
      deficiencies24h: 1,
      deficiencies30d: 2,
      deficiencies60d: 0,
      nextDueISO: "2026-02-03",
      otherDueISO: ["2026-02-24"],
      inspectedISO: null,
      inspectionResult: null,
      ctaLabel: "Upload proof",
      ctaStyle: "primary",
      detailHref: "inspection-detail-bootstrap2.html",
    },
    {
      inspectionId: "26580",
      buildingName: "Lompoc Gardens",
      unitLine: "800 N L St, #003",
      cityLine: "Lompoc, CA 93436",
      tenantName: "Rose, Hayley",
      tenantId: "t0012001",
      inspectionType: "Reinspection",
      inspectionStandard: "NSPIRE-V",
      selfCertification: false,
      proofUploadEnabled: true,
      proofUploadRequired: true,
      status: STATUS.UPLOADS_IN_PROGRESS,
      issueCount: 3,
      proofRequiredCount: 2,
      proofUploadNeededCount: 2,
      issueMeta: "2 still need uploads",
      deficiencies24h: 0,
      deficiencies30d: 2,
      deficiencies60d: 0,
      nextDueISO: "2026-01-29",
      otherDueISO: ["2026-02-24"],
      inspectedISO: null,
      inspectionResult: null,
      ctaLabel: "Upload proof",
      ctaStyle: "primary",
      detailHref: "inspection-detail-bootstrap2.html",
    },
    {
      inspectionId: "26582",
      buildingName: "Lompoc Gardens",
      unitLine: "800 N L St, #002",
      cityLine: "Lompoc, CA 93436",
      tenantName: "Mitchum, Jenny",
      tenantId: "t0012000",
      inspectionType: "Reinspection",
      inspectionStandard: "NSPIRE-V",
      selfCertification: false,
      proofUploadEnabled: true,
      proofUploadRequired: false,
      status: STATUS.PENDING_REVIEW,
      issueCount: 4,
      proofRequiredCount: 0,
      proofUploadNeededCount: 0,
      issueMeta: "2 pending review",
      deficiencies24h: 0,
      deficiencies30d: 0,
      deficiencies60d: 0,
      nextDueISO: null,
      otherDueISO: [],
      inspectedISO: null,
      inspectionResult: null,
      ctaLabel: "View details",
      ctaStyle: "secondary",
      detailHref: "inspection-detail-bootstrap2.html",
    },
    {
      inspectionId: "26585",
      buildingName: "Lompoc Gardens",
      unitLine: "800 N L St, #007",
      cityLine: "Lompoc, CA 93436",
      tenantName: "Hughes, Devin",
      tenantId: "t0012004",
      inspectionType: "Annual",
      inspectionStandard: "NSPIRE-V",
      selfCertification: false,
      proofUploadEnabled: true,
      proofUploadRequired: true,
      status: STATUS.PROOF_REQUIRED,
      issueCount: 2,
      proofRequiredCount: 1,
      proofUploadNeededCount: 1,
      issueMeta: "1 still needs upload",
      deficiencies24h: 0,
      deficiencies30d: 1,
      deficiencies60d: 0,
      nextDueISO: "2026-02-20",
      otherDueISO: [],
      inspectedISO: null,
      inspectionResult: null,
      ctaLabel: "Upload proof",
      ctaStyle: "primary",
      detailHref: "inspection-detail-bootstrap2.html",
    },
    {
      inspectionId: "26586",
      buildingName: "Sunrise Apartments",
      unitLine: "800 N L St, #011",
      cityLine: "Lompoc, CA 93436",
      tenantName: "Walker, Denise",
      tenantId: "t0012005",
      inspectionType: "Self-certification",
      inspectionStandard: "NSPIRE-V",
      selfCertification: true,
      proofUploadEnabled: false,
      proofUploadRequired: false,
      status: STATUS.PENDING_REVIEW,
      issueCount: 3,
      proofRequiredCount: 0,
      proofUploadNeededCount: 0,
      issueMeta: "NSPIRE-V self-certification; proof upload disabled",
      deficiencies24h: 0,
      deficiencies30d: 0,
      deficiencies60d: 0,
      nextDueISO: null,
      otherDueISO: [],
      inspectedISO: null,
      inspectionResult: null,
      ctaLabel: "View details",
      ctaStyle: "secondary",
      detailHref: "inspection-detail-bootstrap2.html?scenario=no-upload-self-cert",
    },
    {
      inspectionId: "26587",
      buildingName: "Oak Ridge Complex",
      unitLine: "800 N L St, #013",
      cityLine: "Lompoc, CA 93436",
      tenantName: "Chen, Linda",
      tenantId: "t0012006",
      inspectionType: "HQS",
      inspectionStandard: "HQS",
      selfCertification: false,
      proofUploadEnabled: false,
      proofUploadRequired: false,
      status: STATUS.PENDING_REVIEW,
      issueCount: 4,
      proofRequiredCount: 0,
      proofUploadNeededCount: 0,
      issueMeta: "HQS inspection; proof upload unavailable",
      deficiencies24h: 0,
      deficiencies30d: 0,
      deficiencies60d: 0,
      nextDueISO: null,
      otherDueISO: [],
      inspectedISO: null,
      inspectionResult: null,
      ctaLabel: "View details",
      ctaStyle: "secondary",
      detailHref: "inspection-detail-bootstrap2.html?scenario=no-upload-hqs",
    },
    ...Array.from({ length: 12 }, (_, i) => {
      const unit = String(10 + i).padStart(2, "0");
      const day = String(2 + i).padStart(2, "0");
      const names = ["Nguyen, Sam", "Patel, Asha", "Kim, Joon", "Garcia, Elena", "Brown, Chris", "Singh, Priya"];
      const buildings = ["Lompoc Gardens", "Sunrise Apartments", "Oak Ridge Complex"];
      const results = [RESULT.PASS, RESULT.PASS, RESULT.FAIL, RESULT.PASS, RESULT.INCONCLUSIVE, RESULT.PASS];
      const inspectionResult = results[i % results.length];
      const issueCount = inspectionResult === RESULT.FAIL ? 2 : 0;
      const issueMeta =
        inspectionResult === RESULT.FAIL
          ? "Deficiencies remain"
          : inspectionResult === RESULT.INCONCLUSIVE
            ? "Follow-up may be required"
            : "No action required";
      return {
        inspectionId: String(26490 + i),
        buildingName: buildings[i % buildings.length],
        unitLine: `800 N L St, #0${unit}`,
        cityLine: "Lompoc, CA 93436",
        tenantName: names[i % names.length],
        tenantId: `t00119${90 + i}`,
        inspectionType: i % 3 === 0 ? "Annual" : "Reinspection",
        inspectionStandard: "NSPIRE-V",
        selfCertification: false,
        proofUploadEnabled: false,
        proofUploadRequired: false,
        status: STATUS.COMPLETED,
        issueCount,
        proofRequiredCount: 0,
        proofUploadNeededCount: 0,
        issueMeta,
        deficiencies24h: 0,
        deficiencies30d: 0,
        deficiencies60d: 0,
        inspectedISO: `2026-01-${day}`,
        inspectionResult,
        nextDueISO: null,
        otherDueISO: [],
        ctaLabel: "View details",
        ctaStyle: "secondary",
        detailHref: "inspection-detail-bootstrap2.html",
      };
    }),
    {
      inspectionId: "26600",
      buildingName: "Lompoc Gardens",
      unitLine: "800 N L St, #008",
      cityLine: "Lompoc, CA 93436",
      tenantName: "Taylor, James",
      tenantId: "t0012010",
      inspectionType: "Annual",
      inspectionStandard: "NSPIRE-V",
      selfCertification: false,
      proofUploadEnabled: false,
      proofUploadRequired: false,
      status: STATUS.SCHEDULED,
      issueCount: 0,
      proofRequiredCount: 0,
      proofUploadNeededCount: 0,
      issueMeta: "",
      deficiencies24h: 0,
      deficiencies30d: 0,
      deficiencies60d: 0,
      scheduledISO: "2026-02-10",
      scheduledTime: "9:00 AM",
      nextDueISO: null,
      otherDueISO: [],
      inspectedISO: null,
      inspectionResult: null,
      ctaLabel: "View details",
      ctaStyle: "secondary",
      detailHref: "inspection-detail-bootstrap2.html",
    },
    {
      inspectionId: "26601",
      buildingName: "Sunrise Apartments",
      unitLine: "800 N L St, #009",
      cityLine: "Lompoc, CA 93436",
      tenantName: "Martinez, Rosa",
      tenantId: "t0012011",
      inspectionType: "Annual",
      inspectionStandard: "NSPIRE-V",
      selfCertification: false,
      proofUploadEnabled: false,
      proofUploadRequired: false,
      status: STATUS.SCHEDULED,
      issueCount: 0,
      proofRequiredCount: 0,
      proofUploadNeededCount: 0,
      issueMeta: "",
      deficiencies24h: 0,
      deficiencies30d: 0,
      deficiencies60d: 0,
      scheduledISO: "2026-02-10",
      scheduledTime: "10:30 AM",
      nextDueISO: null,
      otherDueISO: [],
      inspectedISO: null,
      inspectionResult: null,
      ctaLabel: "View details",
      ctaStyle: "secondary",
      detailHref: "inspection-detail-bootstrap2.html",
    },
    {
      inspectionId: "26602",
      buildingName: "Oak Ridge Complex",
      unitLine: "800 N L St, #012",
      cityLine: "Lompoc, CA 93436",
      tenantName: "Adams, Sarah",
      tenantId: "t0012012",
      inspectionType: "Reinspection",
      inspectionStandard: "NSPIRE-V",
      selfCertification: false,
      proofUploadEnabled: false,
      proofUploadRequired: false,
      status: STATUS.SCHEDULED,
      issueCount: 0,
      proofRequiredCount: 0,
      proofUploadNeededCount: 0,
      issueMeta: "",
      deficiencies24h: 0,
      deficiencies30d: 0,
      deficiencies60d: 0,
      scheduledISO: "2026-02-15",
      scheduledTime: "1:00 PM",
      nextDueISO: null,
      otherDueISO: [],
      inspectedISO: null,
      inspectionResult: null,
      ctaLabel: "View details",
      ctaStyle: "secondary",
      detailHref: "inspection-detail-bootstrap2.html",
    },
    {
      inspectionId: "26603",
      buildingName: "Lompoc Gardens",
      unitLine: "800 N L St, #015",
      cityLine: "Lompoc, CA 93436",
      tenantName: "Lee, Kevin",
      tenantId: "t0012013",
      inspectionType: "Annual",
      inspectionStandard: "NSPIRE-V",
      selfCertification: false,
      proofUploadEnabled: false,
      proofUploadRequired: false,
      status: STATUS.SCHEDULED,
      issueCount: 0,
      proofRequiredCount: 0,
      proofUploadNeededCount: 0,
      issueMeta: "",
      deficiencies24h: 0,
      deficiencies30d: 0,
      deficiencies60d: 0,
      scheduledISO: "2026-02-20",
      scheduledTime: "2:30 PM",
      nextDueISO: null,
      otherDueISO: [],
      inspectedISO: null,
      inspectionResult: null,
      ctaLabel: "View details",
      ctaStyle: "secondary",
      detailHref: "inspection-detail-bootstrap2.html",
    },
  ];

  const el = (id) => document.getElementById(id);
  const normalize = (s) => (s || "").toString().toLowerCase().trim();

  const fmtDate = (iso) => {
    if (!iso) return null;
    const d = new Date(iso + "T00:00:00");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
  };

  const fmtDateShort = (iso) => {
    if (!iso) return null;
    const d = new Date(iso + "T00:00:00");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  };

  const daysUntil = (iso) => {
    if (!iso) return null;
    const start = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate()).getTime();
    const target = new Date(iso + "T00:00:00").getTime();
    return Math.round((target - start) / (1000 * 60 * 60 * 24));
  };

  const statusPillClass = (status) => {
    switch (status) {
      case STATUS.PROOF_REQUIRED:
      case STATUS.UPLOADS_IN_PROGRESS:
        return "status-pill pill-amber";
      case STATUS.PENDING_REVIEW:
        return "status-pill pill-violet";
      case STATUS.REJECTED:
        return "status-pill pill-rose";
      case STATUS.COMPLETED:
        return "status-pill pill-emerald";
      case STATUS.SCHEDULED:
        return "status-pill pill-sky";
      default:
        return "status-pill";
    }
  };

  const resultPillClass = (result) => {
    switch (result) {
      case RESULT.PASS:
        return "result-pill pill-emerald";
      case RESULT.FAIL:
        return "result-pill pill-rose";
      case RESULT.INCONCLUSIVE:
        return "result-pill pill-amber";
      default:
        return "result-pill";
    }
  };

  let activeTab = "open";
  const defaultSortForTab = () => (activeTab === "open" ? "pending-desc" : activeTab === "completed" ? "inspected-desc" : "scheduled-asc");
  let currentSort = defaultSortForTab();

  const renderSortHeader = (label, ascValue, descValue) => {
    const isAsc = currentSort === ascValue;
    const isDesc = currentSort === descValue;
    return `
      <th>
        <button type="button" class="sort-header" data-sort-asc="${ascValue}" data-sort-desc="${descValue}">
          ${label}
          <span style="display:inline-block; margin-left:6px;">
            <span class="sort-chevron ${isAsc ? "active" : ""}">▲</span>
            <span class="sort-chevron ${isDesc ? "active" : ""}">▼</span>
          </span>
        </button>
      </th>
    `;
  };

  const getTabFiltered = () => {
    if (activeTab === "completed") return records.filter((r) => r.status === STATUS.COMPLETED);
    if (activeTab === "scheduled") return records.filter((r) => r.status === STATUS.SCHEDULED);
    return records.filter((r) => r.status !== STATUS.COMPLETED && r.status !== STATUS.SCHEDULED);
  };

  const updateTabCounts = () => {
    el("count-open").textContent = String(records.filter((r) => r.status !== STATUS.COMPLETED && r.status !== STATUS.SCHEDULED).length);
    el("count-completed").textContent = String(records.filter((r) => r.status === STATUS.COMPLETED).length);
    el("count-scheduled").textContent = String(records.filter((r) => r.status === STATUS.SCHEDULED).length);
  };

  const updateTabUI = () => {
    const activeMap = { open: "tab-open", completed: "tab-completed", scheduled: "tab-scheduled" };
    ["tab-open", "tab-completed", "tab-scheduled"].forEach((tabId) => {
      const tabEl = el(tabId);
      if (!tabEl) return;
      const li = tabEl.closest("li");
      const isActive = tabId === activeMap[activeTab];
      if (li) li.classList.toggle("active", isActive);
      if (isActive) tabEl.setAttribute("aria-current", "page");
      else tabEl.removeAttribute("aria-current");
    });

    el("printScheduledBtn").classList.toggle("hidden", activeTab !== "scheduled");
    el("howItWorksCard").classList.toggle("hidden", activeTab !== "open");
  };

  const sortItems = (items) => {
    const cmp = (a, b) => (a || "").localeCompare(b || "");
    const byDate = (a, b) => {
      if (!a && !b) return 0;
      if (!a) return 1;
      if (!b) return -1;
      return new Date(a).getTime() - new Date(b).getTime();
    };
    const pendingBuckets = (record) => {
      const overdue = daysUntil(record.nextDueISO) !== null && daysUntil(record.nextDueISO) < 0 ? record.deficiencies24h : 0;
      const within24 = overdue > 0 ? 0 : record.deficiencies24h;
      return [overdue, within24, record.deficiencies30d, record.deficiencies60d];
    };
    const comparePending = (a, b, direction = "desc") => {
      const aa = pendingBuckets(a);
      const bb = pendingBuckets(b);
      for (let i = 0; i < aa.length; i += 1) {
        if (aa[i] !== bb[i]) return direction === "desc" ? bb[i] - aa[i] : aa[i] - bb[i];
      }
      return direction === "desc" ? byDate(a.nextDueISO, b.nextDueISO) : byDate(b.nextDueISO, a.nextDueISO);
    };

    switch (currentSort) {
      case "unit-asc": return items.slice().sort((a, b) => cmp(a.unitLine, b.unitLine));
      case "unit-desc": return items.slice().sort((a, b) => cmp(b.unitLine, a.unitLine));
      case "tenant-asc": return items.slice().sort((a, b) => cmp(a.tenantName, b.tenantName));
      case "tenant-desc": return items.slice().sort((a, b) => cmp(b.tenantName, a.tenantName));
      case "type-asc": return items.slice().sort((a, b) => cmp(a.inspectionType, b.inspectionType));
      case "type-desc": return items.slice().sort((a, b) => cmp(b.inspectionType, a.inspectionType));
      case "building-asc": return items.slice().sort((a, b) => cmp(a.buildingName, b.buildingName));
      case "building-desc": return items.slice().sort((a, b) => cmp(b.buildingName, a.buildingName));
      case "deficiencies-desc": return items.slice().sort((a, b) => b.issueCount - a.issueCount);
      case "deficiencies-asc": return items.slice().sort((a, b) => a.issueCount - b.issueCount);
      case "pending-desc": return items.slice().sort((a, b) => comparePending(a, b, "desc"));
      case "pending-asc": return items.slice().sort((a, b) => comparePending(a, b, "asc"));
      case "inspected-desc": return items.slice().sort((a, b) => byDate(b.inspectedISO, a.inspectedISO));
      case "inspected-asc": return items.slice().sort((a, b) => byDate(a.inspectedISO, b.inspectedISO));
      case "scheduled-asc": return items.slice().sort((a, b) => byDate(a.scheduledISO, b.scheduledISO));
      case "scheduled-desc": return items.slice().sort((a, b) => byDate(b.scheduledISO, a.scheduledISO));
      default:
        if (activeTab === "open") return items.slice().sort((a, b) => byDate(a.nextDueISO, b.nextDueISO));
        if (activeTab === "completed") return items.slice().sort((a, b) => byDate(b.inspectedISO, a.inspectedISO));
        return items.slice().sort((a, b) => byDate(a.scheduledISO, b.scheduledISO));
    }
  };

  const renderDeficienciesColumn = (r) => {
    if (activeTab === "scheduled") return `<span class="muted-small">-</span>`;

    if (activeTab === "completed") {
      return `
        <div><strong>${r.issueCount} ${r.issueCount === 1 ? "deficiency" : "deficiencies"}</strong></div>
        ${r.inspectedISO ? `<div class="muted-small">Inspected ${fmtDate(r.inspectedISO)}</div>` : ""}
        <div class="muted-small">${r.issueMeta || ""}</div>
        <div style="margin-top:4px;"><span class="${resultPillClass(r.inspectionResult)}">${r.inspectionResult || "Completed"}</span></div>
      `;
    }

    if (!r.proofUploadEnabled) {
      return `<div><strong>${r.issueCount} ${r.issueCount === 1 ? "deficiency" : "deficiencies"}</strong></div><div class="muted-small">Proof upload not required</div>`;
    }

    if (r.proofUploadRequired && r.proofRequiredCount > 0) {
      return `
        <div><strong>${r.issueCount} ${r.issueCount === 1 ? "deficiency" : "deficiencies"}</strong></div>
        <div style="margin-top:4px;"><span class="${statusPillClass(STATUS.PROOF_REQUIRED)}">${r.proofRequiredCount} ${r.proofRequiredCount === 1 ? "requires" : "require"} proof</span></div>
      `;
    }

    return `<div><strong>${r.issueCount} ${r.issueCount === 1 ? "deficiency" : "deficiencies"}</strong></div><div class="muted-small">No proof required</div>`;
  };

  const renderDueColumn = (r) => {
    if (activeTab === "completed") return `<div><strong>-</strong></div><div class="muted-small">No action required</div>`;
    if (activeTab === "scheduled") return `<div><strong>${fmtDateShort(r.scheduledISO)}</strong></div><div class="muted-small">${r.scheduledTime || ""}</div>`;
    const total = r.deficiencies24h + r.deficiencies30d + r.deficiencies60d;
    if (total === 0) return `<div><strong>-</strong></div><div class="muted-small">No pending</div>`;

    const d = daysUntil(r.nextDueISO);
    const isOverdue = d !== null && d <= 0;
    const lines = [];
    if (r.deficiencies24h > 0) lines.push(`<div class="muted-small" style="color:#be123c;"><strong>${r.deficiencies24h}</strong> ${isOverdue ? "overdue" : "within 24 hrs"}</div>`);
    if (r.deficiencies30d > 0) lines.push(`<div class="muted-small" style="color:#b45309;"><strong>${r.deficiencies30d}</strong> within 30 days</div>`);
    if (r.deficiencies60d > 0) lines.push(`<div class="muted-small"><strong>${r.deficiencies60d}</strong> within 60 days</div>`);
    return lines.join("");
  };

  const render = (items) => {
    const isScheduled = activeTab === "scheduled";
    const isCompleted = activeTab === "completed";
    const thead = document.querySelector("#tableBody")?.closest("table")?.querySelector("thead tr");

    if (thead) {
      if (isScheduled) {
        thead.innerHTML = `
          ${renderSortHeader("Unit", "unit-asc", "unit-desc")}
          ${renderSortHeader("Building", "building-asc", "building-desc")}
          ${renderSortHeader("Tenant", "tenant-asc", "tenant-desc")}
          ${renderSortHeader("Type", "type-asc", "type-desc")}
          ${renderSortHeader("Scheduled date", "scheduled-asc", "scheduled-desc")}
          <th style="text-align:right;">Action</th>
        `;
      } else if (isCompleted) {
        thead.innerHTML = `
          ${renderSortHeader("Unit", "unit-asc", "unit-desc")}
          ${renderSortHeader("Building", "building-asc", "building-desc")}
          ${renderSortHeader("Tenant", "tenant-asc", "tenant-desc")}
          ${renderSortHeader("Type", "type-asc", "type-desc")}
          ${renderSortHeader("Deficiencies / Result", "deficiencies-desc", "deficiencies-asc")}
          ${renderSortHeader("Inspected date", "inspected-desc", "inspected-asc")}
          <th style="text-align:right;">Action</th>
        `;
      } else {
        thead.innerHTML = `
          ${renderSortHeader("Unit", "unit-asc", "unit-desc")}
          ${renderSortHeader("Building", "building-asc", "building-desc")}
          ${renderSortHeader("Tenant", "tenant-asc", "tenant-desc")}
          ${renderSortHeader("Type", "type-asc", "type-desc")}
          ${renderSortHeader("Deficiencies", "deficiencies-desc", "deficiencies-asc")}
          ${renderSortHeader("Pending by timeframe", "pending-desc", "pending-asc")}
          <th style="text-align:right;">Action</th>
        `;
      }
    }

    el("tableBody").innerHTML = items
      .map((r) => {
        const ctaClass = r.ctaStyle === "primary" ? "btn btn-primary btn-small" : "btn btn-small";
        if (isScheduled) {
          return `
            <tr>
              <td><strong>${r.unitLine}</strong><div class="muted-small">${r.cityLine} • Inspection #${r.inspectionId}</div></td>
              <td><strong>${r.buildingName}</strong></td>
              <td><strong>${r.tenantName}</strong><div class="muted-small">Tenant ID: ${r.tenantId}</div></td>
              <td>${r.inspectionType}</td>
              <td><strong>${fmtDateShort(r.scheduledISO)}</strong><div class="muted-small">${r.scheduledTime || ""}</div></td>
              <td style="text-align:right;"><a href="${r.detailHref}" class="${ctaClass}">${r.ctaLabel}</a></td>
            </tr>
          `;
        }

        if (isCompleted) {
          return `
            <tr>
              <td><strong>${r.unitLine}</strong><div class="muted-small">${r.cityLine} • Inspection #${r.inspectionId}</div></td>
              <td><strong>${r.buildingName}</strong></td>
              <td><strong>${r.tenantName}</strong><div class="muted-small">Tenant ID: ${r.tenantId}</div></td>
              <td>${r.inspectionType}</td>
              <td>${renderDeficienciesColumn(r)}</td>
              <td><strong>${fmtDate(r.inspectedISO) || "-"}</strong></td>
              <td style="text-align:right;"><a href="${r.detailHref}" class="${ctaClass}">${r.ctaLabel}</a></td>
            </tr>
          `;
        }

        return `
          <tr>
            <td><strong>${r.unitLine}</strong><div class="muted-small">${r.cityLine} • Inspection #${r.inspectionId}</div></td>
            <td><strong>${r.buildingName}</strong></td>
            <td><strong>${r.tenantName}</strong><div class="muted-small">Tenant ID: ${r.tenantId}</div></td>
            <td>${r.inspectionType}</td>
            <td>${renderDeficienciesColumn(r)}</td>
            <td>${renderDueColumn(r)}</td>
            <td style="text-align:right;"><a href="${r.detailHref}" class="${ctaClass}">${r.ctaLabel}</a></td>
          </tr>
        `;
      })
      .join("");

    el("mobileList").innerHTML = items
      .map((r) => {
        const ctaClass = r.ctaStyle === "primary" ? "btn btn-primary btn-small" : "btn btn-small";
        const pillClass = isCompleted ? resultPillClass(r.inspectionResult) : statusPillClass(isScheduled ? STATUS.SCHEDULED : STATUS.PROOF_REQUIRED);
        const pillText = isCompleted ? (r.inspectionResult || "Completed") : isScheduled ? "Scheduled" : r.proofUploadEnabled && r.proofUploadRequired && r.proofRequiredCount > 0 ? `${r.proofRequiredCount} ${r.proofRequiredCount === 1 ? "requires" : "require"} proof` : "";
        const pendingMobile =
          activeTab === "open"
            ? [
                r.deficiencies24h > 0 ? `<span style="color:#be123c;"><strong>${r.deficiencies24h}</strong> ${daysUntil(r.nextDueISO) !== null && daysUntil(r.nextDueISO) < 0 ? "overdue" : "within 24h"}</span>` : "",
                r.deficiencies30d > 0 ? `<span style="color:#b45309;"><strong>${r.deficiencies30d}</strong> within 30d</span>` : "",
                r.deficiencies60d > 0 ? `<span><strong>${r.deficiencies60d}</strong> within 60d</span>` : "",
              ]
                .filter(Boolean)
                .join(", ")
            : "";

        const secondBlock = isScheduled
          ? `<div class="cell"><div class="mobile-label">Scheduled</div><div><strong>${fmtDateShort(r.scheduledISO)}</strong></div><div class="muted-small">${r.scheduledTime || ""}</div></div>`
          : isCompleted
            ? `<div class="cell"><div class="mobile-label">Inspected</div><div><strong>${fmtDate(r.inspectedISO) || "-"}</strong></div></div>`
            : `<div class="cell"><div class="mobile-label">Pending by timeframe</div><div class="muted-small">${pendingMobile || "-"}</div></div>`;

        const thirdBlock = isScheduled
          ? ""
          : `<div class="cell"><div class="mobile-label">${isCompleted ? "Issues" : "Deficiencies"}</div><div><strong>${r.issueCount}</strong></div><div class="muted-small">${!r.proofUploadEnabled ? "Proof upload not required" : !r.proofUploadRequired ? "No proof required" : `${r.proofRequiredCount} ${r.proofRequiredCount === 1 ? "requires" : "require"} proof`}</div></div>`;

        return `
          <div class="mobile-card">
            <div class="row-fluid">
              <div class="span8">
                <div class="mobile-title">${r.unitLine}</div>
                <div class="muted-small">Inspection #${r.inspectionId} • ${r.inspectionType}</div>
                <div class="muted-small">${r.buildingName}</div>
              </div>
              <div class="span4" style="text-align:right;">
                ${pillText ? `<span class="${pillClass}">${pillText}</span>` : ""}
              </div>
            </div>
            <div class="row-fluid mobile-grid">
              <div class="span6 cell">
                <div class="mobile-label">Tenant</div>
                <div>${r.tenantName}</div>
                <div class="muted-small">Tenant ID: ${r.tenantId}</div>
              </div>
              <div class="span6">${secondBlock}</div>
            </div>
            ${thirdBlock ? `<div class="row-fluid mobile-grid"><div class="span8">${thirdBlock}</div><div class="span4" style="text-align:right; padding-top:18px;"><a href="${r.detailHref}" class="${ctaClass}">${r.ctaLabel}</a></div></div>` : `<div class="row-fluid mobile-grid"><div class="span12" style="text-align:right;"><a href="${r.detailHref}" class="${ctaClass}">${r.ctaLabel}</a></div></div>`}
          </div>
        `;
      })
      .join("");
  };

  const applyFilters = () => {
    const q = normalize(el("search").value);
    let items = getTabFiltered();
    if (q) {
      items = items.filter((r) =>
        normalize([r.inspectionId, r.unitLine, r.cityLine, r.buildingName, r.tenantName, r.tenantId, r.inspectionType, r.status, r.issueMeta].join(" ")).includes(q)
      );
    }
    render(sortItems(items));
  };

  const onTab = (tab) => {
    activeTab = tab;
    currentSort = defaultSortForTab();
    updateTabUI();
    applyFilters();
  };

  const attach = () => {
    el("tab-open").addEventListener("click", (e) => (e.preventDefault(), onTab("open")));
    el("tab-completed").addEventListener("click", (e) => (e.preventDefault(), onTab("completed")));
    el("tab-scheduled").addEventListener("click", (e) => (e.preventDefault(), onTab("scheduled")));

    const tableHead = document.querySelector("table thead");
    if (tableHead) {
      tableHead.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-sort-asc][data-sort-desc]");
        if (!btn) return;
        currentSort = currentSort === btn.getAttribute("data-sort-asc") ? btn.getAttribute("data-sort-desc") : btn.getAttribute("data-sort-asc");
        applyFilters();
      });
    }

    el("printScheduledBtn").addEventListener("click", () => window.print());

    let t = null;
    el("search").addEventListener("input", () => {
      if (t) window.clearTimeout(t);
      t = window.setTimeout(() => applyFilters(), 120);
    });
  };

  const init = () => {
    updateTabCounts();
    updateTabUI();
    attach();
    applyFilters();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
