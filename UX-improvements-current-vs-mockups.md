### Unit inspections UX improvements (Current screenshots → Proposed mockups)

**Audience**: Product review  
**Primary user**: Landlords (upload proof photos to mitigate deficiencies; submit for review; track decisions)  
**Mockups**: `mockups/unit-inspections-list.html`, `mockups/inspection-detail.html` (bulk), `mockups/inspection-detail-cards.html` (legacy card layout preserved)

---

## Screen 0 — Dashboard entry (current screenshot: `...11_24_AM (2).png`)

**Current**
- Landlords start on a tile dashboard and click **Unit inspections**.

**Proposed**
- **No change** (out of scope per requirements). Mockups begin at the list page.

---

## Screen 1 — Unit inspections list (current screenshot: `...11_20_AM.png`)

### Current experience (what we see)
- Filters above the table:
  - **Result type** (appears to only offer "Pass")
  - **View inspections that require action?** (Yes/No)
  - **Go** button to apply filters
  - **Excel** export button
- A separate **Search** field sits above the table.
- Table columns are inspection-focused but not action-focused:
  - **Inspection ID**, **Building**, **Unit address**, **Tenant name**, **Tenant code**, **Inspection type**
  - **Scheduled date**, **Inspected date**, **Result**, **Action required?**
  - A generic **Details** button per row
- "Action required?" is a Yes/No rollup, but it does not explain:
  - how many deficiencies exist,
  - what state the proof is in (not started / in progress / submitted / rejected),
  - what the next deadline is when multiple deficiencies have different timeframes.

### Proposed experience (mockup changes + rationale)
- **Shift the page to an "inspection work queue"**
  - Add scan-friendly inspection-level rollups:
    - **Deficiencies / Status** (count + "Proof required" badge when proof still needs uploading)
    - **Pending by timeframe** (count of pending deficiencies by 24 hrs / 30 days / 60 days)
    - Explicit action CTA per row (not a generic "Details")
  - **Why**: the landlord's task is to decide which inspection to open next and what to do there.

- **Simplified status display (product feedback)**
  - At the inspection level, statuses like "Rejected" or "Upload in Progress" are NOT shown as the overall status because a single inspection can have deficiencies in multiple states (e.g., 2 uploaded but not submitted, 1 pending review, 1 rejected, 1 proof required).
  - Instead, show only the **count of deficiencies for which proof is required**.
  - Show the **"Proof required"** badge only when at least one deficiency still needs proof uploaded.
  - Do not show rollup badges like **Pending review**, **Rejected**, or **Uploads in progress** at the inspection level.
  - **Why**: avoids misleading rollup statuses; gives landlords a clear picture of remaining work.

- **Pending by timeframe (replaces "Next due" column)**
  - Instead of showing due dates (which confused landlords when multiple dates appeared), the column now shows a count of pending deficiencies categorized by timeframe:
    - **24 hours** (urgent, color-coded red)
    - **30 days** (color-coded amber)
    - **60 days** (color-coded neutral)
  - **Why**: landlords can immediately see urgency distribution without decoding dates.

- **New "Scheduled" tab**
  - A third tab displays scheduled inspections with:
    - Scheduled date and time
    - Building name, unit, tenant, inspection type
    - **Print scheduled letters** button
  - **Why**: landlords need visibility into upcoming inspections and the ability to print schedule letters.

- **Completed tab shows inspection result**
  - Instead of a generic "Completed" label, the Completed tab now shows the actual inspection result status: **Pass**, **Fail**, or **Inconclusive**.
  - Also shows the **Inspected date** as a dedicated column.
  - **Why**: landlords need to know what the outcome was, not just that it's done.

- **Building Name column added**
  - All tabs now include a **Building** column in the grid.
  - **Why**: missing from original design; landlords managing multiple buildings need this identifier.

- **Sorting option on all grids**
  - A sort dropdown is provided above each tab's table with context-appropriate options:
    - **Open tab**: Urgency (default), Unit A-Z/Z-A, Tenant A-Z/Z-A, Building A-Z/Z-A, Most/Fewest deficiencies
    - **Completed tab**: Newest inspected (default), Oldest inspected, Unit, Tenant, Building
    - **Scheduled tab**: Soonest scheduled (default), Latest scheduled, Unit, Tenant, Building
  - **Why**: sorting was missing from all grids in the original design.

- **Remove non-useful or redundant filters**
  - Remove **Result type** and "Require action?" filters (especially if they're constrained or redundant).
  - Remove "Go" apply pattern; the list behaves as a modern work queue (tab + search).
  - Keep **search** only.
  - **Why**: fewer controls, faster routing to the inspection that needs proof.

- **Simplify views**
  - Three tabs: **Open**, **Completed**, and **Scheduled**, with **real counts**.
  - **Why**: aligns to landlord mental model (work vs done vs upcoming).

- **Clarify identity + reduce column width**
  - Integrate **Tenant ID** as metadata under Tenant name (instead of a dedicated Tenant Code column).
  - **Why**: keeps key ID visible while reducing table width and scanning effort.

- **Search placement + affordance**
  - Move the search field to the **top-right above the table**, add a **search icon** inside the input.
  - Remove visible "Search" label (keep accessible label via `aria-label`).
  - **Why**: cleaner UI and consistent pattern with the detail page.

- **Export button alignment**
  - Keep **Export to Excel** at the top-right of the title row (styled like the detail page).
  - **Why**: consistent placement and reduces clutter near filters.

- **Terminology**
  - Replace "issues" with **deficiencies** throughout.

---

## Screen 2 — Inspection detail (bulk proof workflow)
Current screenshots: `...11_23_AM.png`, `...11_24_AM.png`, `...11_24_AM (1).png`

### Current experience (what we see)
- Page header is heavy and mixed-purpose:
  - Large "Inspection Details" header + back button
  - A long instructional banner explaining how to upload/submit proof
  - A **Letter Type** dropdown + **Generate letter** button (below the fold visually in practice)
  - Summary information is presented as a long list of fields (less visually grouped)
- Bulk actions exist but are ambiguous:
  - "Proof of Mitigation" actions show **Upload**, **Delete**, **Submit** as separate buttons.
  - "Delete" reads like deleting the observation/row (not "remove uploaded proof").
- Table is wide and mixes concerns:
  - Deficiency criteria appears as "Show Criteria" link per row (good, but not streamlined)
  - **Responsibility** is shown; landlord asked whether non-owner responsibility exists (added uncertainty)
  - Notes may appear as "Show Notes" (not always visible)
  - Status labels vary (Action Required / Rejected / Approved / No Action Required)
- Filtering is drop-down driven ("View Observations by Mitigation Status") with a **Go** button.

### Proposed experience (mockup changes + rationale)
- **Make proof submission the primary job-to-be-done**
  - "Proof of mitigation" becomes the primary card containing:
    - bulk actions,
    - search,
    - status filters,
    - and the deficiencies table.
  - **Why**: focuses attention on the task landlords must complete.

- **Single, clear bulk action set**
  - Replace ambiguous actions with:
    - **Upload photos**
    - **Remove photos**
    - **Submit for review**
  - Remove redundant helper text ("Actions apply to selected…").
  - **Why**: avoids misinterpretation and matches user language.

- **Move upload into a modal**
  - Remove the inline uploader to reduce clutter.
  - Put "Images only (JPG/PNG)" guidance inside the upload modal.
  - **Why**: clean action bar + fewer distractions while scanning the table.

- **Improve "Delete" safety and meaning**
  - "Delete" becomes **Remove photos** with confirmation copy that it removes uploaded proof only.
  - **Why**: prevents destructive misunderstandings.

- **Selection is intentional and safe**
  - Nothing selected on load.
  - Selected count updates live; bulk buttons are **disabled until selection exists**.
  - Provide an inline clear action (not a primary button).
  - Disable checkboxes for non-actionable statuses (**Pending review**, **Approved**).
  - **Why**: prevents accidental bulk actions and invalid edits.

- **Modernize filtering**
  - Replace "Mitigation Status" dropdown + Go with **pill filters** (one-click):
    - **All**, **Proof required**, **Rejected**, **Pending review**, **Approved**
  - Filters are **functional**: they show/hide deficiency rows and keep selection state safe.
  - **Why**: one-click triage and more transparent state switching.

- **Rejection notes for rejected mitigation (product feedback)**
  - Each deficiency with "Rejected" status now shows a **"View rejection notes"** link next to the status badge.
  - Clicking it opens a modal with the inspector/agency's feedback explaining why the proof was rejected.
  - The modal includes guidance: "Please address the feedback above, then upload new proof photos and resubmit for review."
  - **Why**: landlords previously had no way to see why their mitigation was rejected, making it difficult to know what to fix.

- **Sorting option for deficiencies grid (product feedback)**
  - A sort dropdown is added to the deficiencies grid with options:
    - **Due soonest** (default), **Due latest**, **Status A→Z**, **Location A→Z**
  - Sort uses `data-due-iso`, `data-status`, and `data-location` attributes on rows for ordering.
  - **Why**: sorting was missing from the deficiencies grid.

- **Table simplification and scanability**
  - Remove the redundant "Details" column.
  - Keep the default table row focused on scan-first fields only: checkbox, **Due**, **Location**, **Standard / Criteria**, and **Status**.
  - Add a leading expand/collapse control per row.
  - Move long-form and secondary details into an inline expandable detail row beneath each deficiency:
    - **Observation**
    - **Notes**
    - **Responsibility**
    - **Attachments**
    - **Proof**
    - Rejection feedback link when applicable
  - Keep **Standard / Criteria** merged, with "View criteria" opening a modal.
  - Notes continue to support inline **read more** expansion within the expanded detail panel.
  - **Why**: preserves fast scanning in the main grid, reduces wrapping, and still keeps full deficiency details in context.

- **Due/timeframe correctness**
  - Ensure the "24 hours" timeframe does not display contradictory "due in 2 days".
  - **Why**: prevents trust issues and missed deadlines.

- **Header and actions above the fold**
  - Replace the heavy page header with a clean title row:
    - Back arrow next to **Inspection #26581**
    - Top-right actions: **Generate letter** (opens modal for type selection) + **Export to Excel**
  - **Why**: reduces vertical waste and makes high-value actions discoverable.

- **Summary information grouped for faster comprehension**
  - Reformat summary into grouped tiles:
    - Tenant (includes Tenant ID), Unit, Inspection, Inspector
  - Remove inspection-level "status/next due" from summary (since deficiencies vary).
  - **Why**: makes critical context scannable without implying a single shared status/due.

- **Search affordance**
  - Add a search icon inside the deficiency search field.

---

## Notes / decisions to confirm with Product
- **HQS inspections and self-certification**: When "Allow Document Upload for NSPIRE-V Inspection Self-Certification" is turned off, landlords will not be required to upload proofs. The UI should gracefully handle this (hide/disable upload actions). CSD is checking whether proof upload should also be available for HQS inspections.
- **Inspection list rollups**: an inspection can have multiple deficiencies; list should show:
  - **Proof required count** (how many deficiencies require proof overall)
  - **Proof required badge** only when upload is still missing for at least one deficiency
  - **Pending by timeframe** (count of pending deficiencies by 24h / 30d / 60d)
- **Landlord resolution**: proof is **photos only**.
- **Terminology**: "deficiencies" is used throughout.
