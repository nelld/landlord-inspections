// Unit Inspections list mockup (functional prototype)
// - Open/Completed/Scheduled tabs are functional
// - Counts are computed from the dataset below
// - Filters + sort update the table and mobile cards
//
// Note: This is a static prototype (no backend). Dates use a fixed "today" for stable demo output.

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
    // ----- Open (7) -----
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
      detailHref: "inspection-detail.html",
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
      detailHref: "inspection-detail.html",
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
      detailHref: "inspection-detail.html",
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
      detailHref: "inspection-detail.html",
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
      detailHref: "inspection-detail.html",
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
      detailHref: "inspection-detail.html?scenario=no-upload-self-cert",
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
      detailHref: "inspection-detail.html?scenario=no-upload-hqs",
    },

    // ----- Completed (12) -----
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
        detailHref: "inspection-detail.html",
      };
    }),

    // ----- Scheduled (4) -----
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
      detailHref: "inspection-detail.html",
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
      detailHref: "inspection-detail.html",
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
      detailHref: "inspection-detail.html",
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
      detailHref: "inspection-detail.html",
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

  const statusChip = (status) => {
    switch (status) {
      case STATUS.PROOF_REQUIRED:
        return { bg: "bg-amber-50", text: "text-amber-800", dot: "bg-amber-500" };
      case STATUS.UPLOADS_IN_PROGRESS:
        return { bg: "bg-amber-50", text: "text-amber-800", dot: "bg-amber-500" };
      case STATUS.PENDING_REVIEW:
        return { bg: "bg-violet-50", text: "text-violet-700", dot: "bg-violet-500" };
      case STATUS.REJECTED:
        return { bg: "bg-amber-50", text: "text-amber-800", dot: "bg-amber-500" };
      case STATUS.COMPLETED:
        return { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" };
      case STATUS.SCHEDULED:
        return { bg: "bg-sky-50", text: "text-sky-700", dot: "bg-sky-500" };
      default:
        return { bg: "bg-slate-100", text: "text-slate-700", dot: "bg-slate-400" };
    }
  };

  const resultChip = (result) => {
    switch (result) {
      case RESULT.PASS:
        return { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" };
      case RESULT.FAIL:
        return { bg: "bg-rose-50", text: "text-rose-700", dot: "bg-rose-500" };
      case RESULT.INCONCLUSIVE:
        return { bg: "bg-amber-50", text: "text-amber-800", dot: "bg-amber-500" };
      default:
        return { bg: "bg-slate-100", text: "text-slate-700", dot: "bg-slate-400" };
    }
  };

  let activeTab = "open"; // "open" | "completed" | "scheduled"
  const defaultSortForTab = () => {
    if (activeTab === "open") return "pending-desc";
    if (activeTab === "completed") return "inspected-desc";
    return "scheduled-asc";
  };
  let currentSort = defaultSortForTab();

  const renderSortHeader = (label, ascValue, descValue, extraClass = "") => {
    const isAsc = currentSort === ascValue;
    const isDesc = currentSort === descValue;

    return `
      <th class="px-4 py-3 font-semibold ${extraClass}">
        <button
          type="button"
          class="inline-flex items-start gap-2 text-left text-inherit hover:text-slate-900"
          data-sort-asc="${ascValue}"
          data-sort-desc="${descValue}"
        >
          <span>${label}</span>
          <span class="mt-0.5 inline-flex flex-col gap-px leading-[0.7]" aria-hidden="true">
            <span class="text-[9px] ${isAsc ? "text-brand-700" : "text-slate-300"}">▲</span>
            <span class="text-[9px] ${isDesc ? "text-brand-700" : "text-slate-300"}">▼</span>
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
    el("count-open").textContent = String(
      records.filter((r) => r.status !== STATUS.COMPLETED && r.status !== STATUS.SCHEDULED).length
    );
    el("count-completed").textContent = String(records.filter((r) => r.status === STATUS.COMPLETED).length);
    el("count-scheduled").textContent = String(records.filter((r) => r.status === STATUS.SCHEDULED).length);
  };

  const updateTabUI = () => {
    const tabs = ["tab-open", "tab-completed", "tab-scheduled"];
    const activeMap = { open: "tab-open", completed: "tab-completed", scheduled: "tab-scheduled" };

    tabs.forEach((tabId) => {
      const tabEl = el(tabId);
      if (!tabEl) return;
      const isActive = tabId === activeMap[activeTab];
      tabEl.className = isActive
        ? "border-b-2 border-brand-600 pb-3 text-sm font-semibold text-brand-700"
        : "border-b-2 border-transparent pb-3 text-sm font-semibold text-slate-600 hover:text-slate-800";
      if (isActive) tabEl.setAttribute("aria-current", "page");
      else tabEl.removeAttribute("aria-current");
    });

    const printBtn = el("printScheduledBtn");
    const howItWorksCard = el("howItWorksCard");

    if (printBtn) {
      printBtn.classList.toggle("hidden", activeTab !== "scheduled");
    }

    if (howItWorksCard) {
      howItWorksCard.classList.toggle("hidden", activeTab !== "open");
    }
  };

  const updateSummary = (items) => {
    void items;
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
        if (aa[i] !== bb[i]) {
          return direction === "desc" ? bb[i] - aa[i] : aa[i] - bb[i];
        }
      }
      return direction === "desc" ? byDate(a.nextDueISO, b.nextDueISO) : byDate(b.nextDueISO, a.nextDueISO);
    };

    switch (currentSort) {
      case "unit-asc":
        return items.slice().sort((a, b) => cmp(a.unitLine, b.unitLine));
      case "unit-desc":
        return items.slice().sort((a, b) => cmp(b.unitLine, a.unitLine));
      case "tenant-asc":
        return items.slice().sort((a, b) => cmp(a.tenantName, b.tenantName));
      case "tenant-desc":
        return items.slice().sort((a, b) => cmp(b.tenantName, a.tenantName));
      case "type-asc":
        return items.slice().sort((a, b) => cmp(a.inspectionType, b.inspectionType));
      case "type-desc":
        return items.slice().sort((a, b) => cmp(b.inspectionType, a.inspectionType));
      case "building-asc":
        return items.slice().sort((a, b) => cmp(a.buildingName, b.buildingName));
      case "building-desc":
        return items.slice().sort((a, b) => cmp(b.buildingName, a.buildingName));
      case "deficiencies-desc":
        return items.slice().sort((a, b) => b.issueCount - a.issueCount);
      case "deficiencies-asc":
        return items.slice().sort((a, b) => a.issueCount - b.issueCount);
      case "pending-desc":
        return items.slice().sort((a, b) => comparePending(a, b, "desc"));
      case "pending-asc":
        return items.slice().sort((a, b) => comparePending(a, b, "asc"));
      case "inspected-desc":
        return items.slice().sort((a, b) => byDate(b.inspectedISO, a.inspectedISO));
      case "inspected-asc":
        return items.slice().sort((a, b) => byDate(a.inspectedISO, b.inspectedISO));
      case "scheduled-asc":
        return items.slice().sort((a, b) => byDate(a.scheduledISO, b.scheduledISO));
      case "scheduled-desc":
        return items.slice().sort((a, b) => byDate(b.scheduledISO, a.scheduledISO));
      default:
        if (activeTab === "open") {
          return items.slice().sort((a, b) => byDate(a.nextDueISO, b.nextDueISO));
        } else if (activeTab === "completed") {
          return items.slice().sort((a, b) => byDate(b.inspectedISO, a.inspectedISO));
        } else if (activeTab === "scheduled") {
          return items.slice().sort((a, b) => byDate(a.scheduledISO, b.scheduledISO));
        }
        return items;
    }
  };

  const renderDeficienciesColumn = (r) => {
    if (activeTab === "scheduled") return `<span class="text-xs text-slate-500">—</span>`;

    const chip = statusChip(STATUS.PROOF_REQUIRED);

    if (activeTab === "completed") {
      const rChip = resultChip(r.inspectionResult);
      return `
        <div class="inline-flex flex-col items-start gap-1">
          <div class="font-semibold text-slate-900">${r.issueCount} ${r.issueCount === 1 ? "deficiency" : "deficiencies"}</div>
          ${r.inspectedISO ? `<div class="text-xs text-slate-500">Inspected ${fmtDate(r.inspectedISO)}</div>` : ""}
          <div class="text-xs text-slate-500">${r.issueMeta || ""}</div>
          <span class="mt-1 inline-flex items-center gap-2 rounded-full ${rChip.bg} px-2 py-1 text-xs font-semibold ${rChip.text}">
            <span class="h-2 w-2 rounded-full ${rChip.dot}"></span>
            ${r.inspectionResult || "Completed"}
          </span>
        </div>
      `;
    }

    if (!r.proofUploadEnabled) {
      return `
        <div class="inline-flex flex-col items-start gap-1">
          <div class="font-semibold text-slate-900">${r.issueCount} ${r.issueCount === 1 ? "deficiency" : "deficiencies"}</div>
          <div class="text-xs text-slate-500">Proof upload not required</div>
        </div>
      `;
    }

    if (r.proofUploadRequired && r.proofRequiredCount > 0) {
      return `
        <div class="inline-flex flex-col items-start gap-1">
          <div class="font-semibold text-slate-900">${r.issueCount} ${r.issueCount === 1 ? "deficiency" : "deficiencies"}</div>
          <span class="mt-1 inline-flex items-center gap-2 rounded-full ${chip.bg} px-2 py-1 text-xs font-semibold ${chip.text}">
            <span class="h-2 w-2 rounded-full ${chip.dot}"></span>
            ${r.proofRequiredCount} ${r.proofRequiredCount === 1 ? "requires" : "require"} proof
          </span>
        </div>
      `;
    }

    return `
      <div class="inline-flex flex-col items-start gap-1">
        <div class="font-semibold text-slate-900">${r.issueCount} ${r.issueCount === 1 ? "deficiency" : "deficiencies"}</div>
        <div class="text-xs text-slate-500">No proof required</div>
      </div>
    `;
  };

  const renderDueColumn = (r) => {
    if (activeTab === "completed") {
      return `
        <div class="font-semibold text-slate-900">—</div>
        <div class="text-xs text-slate-500">No action required</div>
      `;
    }

    if (activeTab === "scheduled") {
      return `
        <div class="font-semibold text-slate-900">${fmtDateShort(r.scheduledISO)}</div>
        <div class="text-xs text-slate-500">${r.scheduledTime || ""}</div>
      `;
    }

    const total = r.deficiencies24h + r.deficiencies30d + r.deficiencies60d;
    if (total === 0) {
      return `
        <div class="font-semibold text-slate-900">—</div>
        <div class="text-xs text-slate-500">No pending</div>
      `;
    }

    const d = daysUntil(r.nextDueISO);
    const isOverdue = d !== null && d <= 0;

    let lines = [];
    if (r.deficiencies24h > 0) {
      lines.push(
        `<span class="inline-flex items-center gap-1.5 rounded bg-rose-50 px-1.5 py-0.5 text-xs font-semibold text-rose-700">${r.deficiencies24h} ${isOverdue ? "overdue" : "within 24 hrs"}</span>`
      );
    }
    if (r.deficiencies30d > 0) {
      lines.push(
        `<span class="inline-flex items-center gap-1.5 rounded bg-amber-50 px-1.5 py-0.5 text-xs font-semibold text-amber-800">${r.deficiencies30d} within 30 days</span>`
      );
    }
    if (r.deficiencies60d > 0) {
      lines.push(
        `<span class="inline-flex items-center gap-1.5 rounded bg-slate-100 px-1.5 py-0.5 text-xs font-semibold text-slate-700">${r.deficiencies60d} within 60 days</span>`
      );
    }

    return `
      <div class="flex flex-col gap-1">${lines.join("")}</div>
    `;
  };

  const render = (items) => {
    const isScheduled = activeTab === "scheduled";
    const isCompleted = activeTab === "completed";

    // Update table header based on tab
    const thead = document.querySelector("#tableBody")?.closest("table")?.querySelector("thead tr");
    if (thead) {
      if (isScheduled) {
        thead.innerHTML = `
          ${renderSortHeader("Unit", "unit-asc", "unit-desc")}
          ${renderSortHeader("Building", "building-asc", "building-desc")}
          ${renderSortHeader("Tenant", "tenant-asc", "tenant-desc")}
          ${renderSortHeader("Type", "type-asc", "type-desc")}
          ${renderSortHeader("Scheduled date", "scheduled-asc", "scheduled-desc")}
          <th class="px-4 py-3 text-right font-semibold">Action</th>
        `;
      } else if (isCompleted) {
        thead.innerHTML = `
          ${renderSortHeader("Unit", "unit-asc", "unit-desc")}
          ${renderSortHeader("Building", "building-asc", "building-desc")}
          ${renderSortHeader("Tenant", "tenant-asc", "tenant-desc")}
          ${renderSortHeader("Type", "type-asc", "type-desc")}
          ${renderSortHeader("Deficiencies / Result", "deficiencies-desc", "deficiencies-asc")}
          ${renderSortHeader("Inspected date", "inspected-desc", "inspected-asc")}
          <th class="px-4 py-3 text-right font-semibold">Action</th>
        `;
      } else {
        thead.innerHTML = `
          ${renderSortHeader("Unit", "unit-asc", "unit-desc")}
          ${renderSortHeader("Building", "building-asc", "building-desc")}
          ${renderSortHeader("Tenant", "tenant-asc", "tenant-desc")}
          ${renderSortHeader("Type", "type-asc", "type-desc")}
          ${renderSortHeader("Deficiencies", "deficiencies-desc", "deficiencies-asc")}
          ${renderSortHeader("Pending by timeframe", "pending-desc", "pending-asc")}
          <th class="px-4 py-3 text-right font-semibold">Action</th>
        `;
      }
    }

    el("tableBody").innerHTML = items
      .map((r) => {
        const ctaClass =
          r.ctaStyle === "primary"
            ? "inline-flex items-center justify-center rounded-md bg-brand-600 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-700"
            : "inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50";

        if (isScheduled) {
          return `
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-3">
                <div class="font-semibold text-slate-900">${r.unitLine}</div>
                <div class="text-xs text-slate-500">${r.cityLine} • Inspection #${r.inspectionId}</div>
              </td>
              <td class="px-4 py-3">
                <div class="font-medium text-slate-900">${r.buildingName}</div>
              </td>
              <td class="px-4 py-3">
                <div class="font-medium text-slate-900">${r.tenantName}</div>
                <div class="text-xs text-slate-500">Tenant ID: ${r.tenantId}</div>
              </td>
              <td class="px-4 py-3">${r.inspectionType}</td>
              <td class="px-4 py-3">
                <div class="font-semibold text-slate-900">${fmtDateShort(r.scheduledISO)}</div>
                <div class="text-xs text-slate-500">${r.scheduledTime || ""}</div>
              </td>
              <td class="px-4 py-3 text-right">
                <a href="${r.detailHref}" class="${ctaClass}">${r.ctaLabel}</a>
              </td>
            </tr>
          `;
        }

        if (isCompleted) {
          return `
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-3">
                <div class="font-semibold text-slate-900">${r.unitLine}</div>
                <div class="text-xs text-slate-500">${r.cityLine} • Inspection #${r.inspectionId}</div>
              </td>
              <td class="px-4 py-3">
                <div class="font-medium text-slate-900">${r.buildingName}</div>
              </td>
              <td class="px-4 py-3">
                <div class="font-medium text-slate-900">${r.tenantName}</div>
                <div class="text-xs text-slate-500">Tenant ID: ${r.tenantId}</div>
              </td>
              <td class="px-4 py-3">${r.inspectionType}</td>
              <td class="px-4 py-3">${renderDeficienciesColumn(r)}</td>
              <td class="px-4 py-3">
                <div class="font-medium text-slate-900">${fmtDate(r.inspectedISO) || "—"}</div>
              </td>
              <td class="px-4 py-3 text-right">
                <a href="${r.detailHref}" class="${ctaClass}">${r.ctaLabel}</a>
              </td>
            </tr>
          `;
        }

        return `
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3">
              <div class="font-semibold text-slate-900">${r.unitLine}</div>
              <div class="text-xs text-slate-500">${r.cityLine} • Inspection #${r.inspectionId}</div>
            </td>
            <td class="px-4 py-3">
              <div class="font-medium text-slate-900">${r.buildingName}</div>
            </td>
            <td class="px-4 py-3">
              <div class="font-medium text-slate-900">${r.tenantName}</div>
              <div class="text-xs text-slate-500">Tenant ID: ${r.tenantId}</div>
            </td>
            <td class="px-4 py-3">${r.inspectionType}</td>
            <td class="px-4 py-3">${renderDeficienciesColumn(r)}</td>
            <td class="px-4 py-3">${renderDueColumn(r)}</td>
            <td class="px-4 py-3 text-right">
              <a href="${r.detailHref}" class="${ctaClass}">${r.ctaLabel}</a>
            </td>
          </tr>
        `;
      })
      .join("");

    // Mobile cards
    el("mobileList").innerHTML = items
      .map((r) => {
        const chip = statusChip(STATUS.PROOF_REQUIRED);
        const ctaClass =
          r.ctaStyle === "primary"
            ? "inline-flex rounded-md bg-brand-600 px-3 py-2 text-sm font-semibold text-white"
            : "inline-flex rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700";

        if (isScheduled) {
          return `
            <a href="${r.detailHref}" class="block rounded-lg border border-slate-200 bg-white p-4 shadow-card hover:bg-slate-50">
              <div class="flex items-start justify-between gap-3">
                <div>
                  <div class="text-sm font-semibold">${r.unitLine}</div>
                  <div class="mt-0.5 text-xs text-slate-500">Inspection #${r.inspectionId} • ${r.inspectionType}</div>
                  <div class="mt-0.5 text-xs text-slate-500">${r.buildingName}</div>
                </div>
                <span class="inline-flex items-center gap-2 rounded-full ${chip.bg} px-2 py-1 text-xs font-semibold ${chip.text}">
                  <span class="h-2 w-2 rounded-full ${chip.dot}"></span>
                  Scheduled
                </span>
              </div>
              <div class="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div class="text-xs font-medium text-slate-500">Tenant</div>
                  <div class="mt-0.5">${r.tenantName}</div>
                </div>
                <div>
                  <div class="text-xs font-medium text-slate-500">Scheduled</div>
                  <div class="mt-0.5 font-semibold text-slate-900">${fmtDateShort(r.scheduledISO)}</div>
                  <div class="mt-0.5 text-xs text-slate-500">${r.scheduledTime || ""}</div>
                </div>
              </div>
            </a>
          `;
        }

        if (isCompleted) {
          const rChip = resultChip(r.inspectionResult);
          return `
            <a href="${r.detailHref}" class="block rounded-lg border border-slate-200 bg-white p-4 shadow-card hover:bg-slate-50">
              <div class="flex items-start justify-between gap-3">
                <div>
                  <div class="text-sm font-semibold">${r.unitLine}</div>
                  <div class="mt-0.5 text-xs text-slate-500">Inspection #${r.inspectionId} • ${r.inspectionType}</div>
                  <div class="mt-0.5 text-xs text-slate-500">${r.buildingName}</div>
                </div>
                <span class="inline-flex items-center gap-2 rounded-full ${rChip.bg} px-2 py-1 text-xs font-semibold ${rChip.text}">
                  <span class="h-2 w-2 rounded-full ${rChip.dot}"></span>
                  ${r.inspectionResult || "Completed"}
                </span>
              </div>
              <div class="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div class="text-xs font-medium text-slate-500">Tenant</div>
                  <div class="mt-0.5">${r.tenantName}</div>
                </div>
                <div>
                  <div class="text-xs font-medium text-slate-500">Inspected</div>
                  <div class="mt-0.5 font-semibold text-slate-900">${fmtDate(r.inspectedISO) || "—"}</div>
                </div>
                <div>
                  <div class="text-xs font-medium text-slate-500">Issues</div>
                  <div class="mt-0.5 font-semibold text-slate-900">${r.issueCount}</div>
                </div>
                <div class="flex items-end justify-end">
                  <span class="${ctaClass}">${r.ctaLabel}</span>
                </div>
              </div>
            </a>
          `;
        }

        // Open tab
        let dueMobileHtml = "";
        const total = r.deficiencies24h + r.deficiencies30d + r.deficiencies60d;
        if (total > 0) {
          let parts = [];
          if (r.deficiencies24h > 0) parts.push(`<span class="text-rose-700 font-semibold">${r.deficiencies24h} ${daysUntil(r.nextDueISO) !== null && daysUntil(r.nextDueISO) < 0 ? "overdue" : "within 24h"}</span>`);
          if (r.deficiencies30d > 0) parts.push(`<span class="text-amber-800 font-semibold">${r.deficiencies30d} within 30d</span>`);
          if (r.deficiencies60d > 0) parts.push(`<span class="text-slate-700 font-semibold">${r.deficiencies60d} within 60d</span>`);
          dueMobileHtml = parts.join(", ");
        } else {
          dueMobileHtml = `<span class="text-slate-500">—</span>`;
        }

        return `
          <a href="${r.detailHref}" class="block rounded-lg border border-slate-200 bg-white p-4 shadow-card hover:bg-slate-50">
            <div class="flex items-start justify-between gap-3">
              <div>
                <div class="text-sm font-semibold">${r.unitLine}</div>
                <div class="mt-0.5 text-xs text-slate-500">Inspection #${r.inspectionId} • ${r.inspectionType}</div>
                <div class="mt-0.5 text-xs text-slate-500">${r.buildingName}</div>
              </div>
              ${
                r.proofUploadEnabled && r.proofUploadRequired && r.proofRequiredCount > 0
                  ? `<span class="inline-flex items-center gap-2 rounded-full ${chip.bg} px-2 py-1 text-xs font-semibold ${chip.text}">
                      <span class="h-2 w-2 rounded-full ${chip.dot}"></span>
                      ${r.proofRequiredCount} ${r.proofRequiredCount === 1 ? "requires" : "require"} proof
                    </span>`
                  : ""
              }
            </div>
            <div class="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div>
                <div class="text-xs font-medium text-slate-500">Tenant</div>
                <div class="mt-0.5">${r.tenantName}</div>
                <div class="mt-0.5 text-xs text-slate-500">Tenant ID: ${r.tenantId}</div>
              </div>
              <div>
                <div class="text-xs font-medium text-slate-500">Pending by timeframe</div>
                <div class="mt-0.5 text-xs">${dueMobileHtml}</div>
              </div>
              <div>
                <div class="text-xs font-medium text-slate-500">Deficiencies</div>
                <div class="mt-0.5 font-semibold text-slate-900">${r.issueCount} ${r.issueCount === 1 ? "deficiency" : "deficiencies"}</div>
                <div class="mt-0.5 text-xs text-slate-500">${!r.proofUploadEnabled ? "Proof upload not required" : !r.proofUploadRequired ? "No proof required" : `${r.proofRequiredCount} ${r.proofRequiredCount === 1 ? "requires" : "require"} proof`}</div>
              </div>
              <div class="flex items-end justify-end">
                <span class="${ctaClass}">${r.ctaLabel}</span>
              </div>
            </div>
          </a>
        `;
      })
      .join("");
  };

  const applyFilters = () => {
    const q = normalize(el("search").value);

    let items = getTabFiltered();

    if (q) {
      items = items.filter((r) => {
        const hay = normalize(
          [
            r.inspectionId,
            r.unitLine,
            r.cityLine,
            r.buildingName,
            r.tenantName,
            r.tenantId,
            r.inspectionType,
            r.status,
            r.issueMeta,
          ].join(" ")
        );
        return hay.includes(q);
      });
    }

    items = sortItems(items);

    render(items);
    updateSummary(items);
  };

  const onTab = (tab) => {
    activeTab = tab;
    currentSort = defaultSortForTab();
    updateTabUI();
    applyFilters();
  };

  const attach = () => {
    el("tab-open").addEventListener("click", (e) => {
      e.preventDefault();
      onTab("open");
    });
    el("tab-completed").addEventListener("click", (e) => {
      e.preventDefault();
      onTab("completed");
    });
    el("tab-scheduled").addEventListener("click", (e) => {
      e.preventDefault();
      onTab("scheduled");
    });

    const tableHead = document.querySelector("table thead");
    if (tableHead) {
      tableHead.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-sort-asc][data-sort-desc]");
        if (!btn) return;

        const ascValue = btn.getAttribute("data-sort-asc");
        const descValue = btn.getAttribute("data-sort-desc");
        currentSort = currentSort === ascValue ? descValue : ascValue;
        applyFilters();
      });
    }

    const printBtn = el("printScheduledBtn");
    if (printBtn) {
      printBtn.addEventListener("click", () => {
        window.print();
      });
    }

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
