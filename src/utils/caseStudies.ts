import type { CaseStudy } from '../data/portfolio';

/**
 * Filters out case studies marked as hidden or lacking required Problem/Approach/Result content.
 */
export function getVisibleCaseStudies(studies: CaseStudy[]): CaseStudy[] {
  return studies.filter(
    (study) =>
      !study.hidden &&
      study.title.trim().length > 0 &&
      study.problem.trim().length > 0 &&
      study.approach.trim().length > 0 &&
      study.result.trim().length > 0
  );
}
