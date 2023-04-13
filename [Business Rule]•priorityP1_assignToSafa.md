[Business Rule]
When Incident Priority is P1, set the Assigned to field value to Safa

1. All > System Definition > Business Rules : New
2. Tabs: 
When to run: before - insert, update, query; Priority is 1-Critical
Action: Assigned to - Safa Fatima

**3. New Incident Record:**
  a. All > Incident > Create New OR incident.do
  b. Make Priority = 1
  c. No changes in Assigned to field value
  d. Save OR Submit the record
  e. Result: Assigned to - Safa Fatima
  f. Note: Even if you Assigned to someone else, once you save/submit, it will be assigned to Safa

**4. Old Incident Record:**
  a. No changes if already Assigned to is filled
  b. But if you change priorities with Assigned to existing as someone else, and then save/submit on p1 again, Assigned to - Safa Fatima
  c.  Ex1: Old Incident - P1 - Assigned to: ITIL User. Save/Submit. Assigned to: ITIL User [NO CHANGE]
  d. Ex2: Old Incident - P1 - Assigned to: ITIL User. {Change Assigned to: Afeef Rb}. Save/Submit. Assigned to: Safa Fatima
  e. Ex3: Old Incident - P1 - Assigned to: ITIL User. {Change P1 > P2 > P1}. Save/Submit. Assigned to: Safa Fatima
