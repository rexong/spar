import { describe, it, expect, vi } from 'vitest';
import * as personas from '../src/pages/personas';
import * as goals from '../src/pages/goals';
import * as metrics from '../src/pages/metrics';
import * as evaluators from '../src/pages/evaluators';
import * as conversations from '../src/pages/conversations';
import * as annotations from '../src/pages/annotations';
import Dashboard from '../src/pages/landing';
import { appRoutes } from '../src/routes';

vi.mock('./pages/landing', () => ({ default: () => <div data-testid="dashboard" /> }));
vi.mock('./pages/personas', () => ({
  PersonasList: () => <div data-testid="personas-list" />,
  PersonasCreate: () => <div data-testid="personas-create" />,
  PersonasEdit: () => <div data-testid="personas-edit" />,
  PersonasView: () => <div data-testid="personas-view" />,
}));
vi.mock('./pages/goals', () => ({
  GoalsList: () => <div data-testid="goals-list" />,
  GoalsCreate: () => <div data-testid="goals-create" />,
  GoalsEdit: () => <div data-testid="goals-edit" />,
  GoalsView: () => <div data-testid="goals-view" />,
}));
vi.mock('./pages/metrics', () => ({
  MetricsList: () => <div data-testid="metrics-list" />,
  MetricsCreate: () => <div data-testid="metrics-create" />,
  MetricsEdit: () => <div data-testid="metrics-edit" />,
  MetricsView: () => <div data-testid="metrics-view" />,
}));
vi.mock('./pages/evaluators', () => ({
  EvaluatorsList: () => <div data-testid="evaluators-list" />,
  EvaluatorsCreate: () => <div data-testid="evaluators-create" />,
  EvaluatorsEdit: () => <div data-testid="evaluators-edit" />,
  EvaluatorsView: () => <div data-testid="evaluators-view" />,
}));
vi.mock('./pages/conversations', () => ({
  ConversationsList: () => <div data-testid="conversations-list" />,
  ConversationsDetails: () => <div data-testid="conversations-details" />,
  ConversationsGenerate: () => <div data-testid="conversations-generate" />,
  ConversationsUpload: () => <div data-testid="conversations-upload" />,
}));
vi.mock('./pages/annotations', () => ({
  AnnotationsList: () => <div data-testid="annotations-list" />,
  AnnotationsCreate: () => <div data-testid="annotations-create" />,
  AnnotationsStart: () => <div data-testid="annotations-start" />,
}));

describe('appRoutes', () => {
  it('should be an array', () => {
    expect(Array.isArray(appRoutes)).toBe(true);
  });

  it('should contain all expected paths', () => {
    const paths = appRoutes.map(r => r.path);
    expect(paths).toContain('/');
    expect(paths).toContain('/personas');
    expect(paths).toContain('/personas/create');
    expect(paths).toContain('/personas/edit/:id');
    expect(paths).toContain('/personas/:id');
    expect(paths).toContain('/goals');
    expect(paths).toContain('/goals/create');
    expect(paths).toContain('/goals/edit/:id');
    expect(paths).toContain('/goals/:id');
    expect(paths).toContain('/metrics');
    expect(paths).toContain('/metrics/create');
    expect(paths).toContain('/metrics/edit/:id');
    expect(paths).toContain('/metrics/:id');
    expect(paths).toContain('/evaluators');
    expect(paths).toContain('/evaluators/create');
    expect(paths).toContain('/evaluators/edit/:id');
    expect(paths).toContain('/evaluators/:id');
    expect(paths).toContain('/conversations');
    expect(paths).toContain('/conversations/generate');
    expect(paths).toContain('/conversations/upload');
    expect(paths).toContain('/conversations/:id');
    expect(paths).toContain('/annotations');
    expect(paths).toContain('/annotations/start');
    expect(paths).toContain('/annotations/create');
  });

  it('should have correct element types for each route', () => {
    const routeMap = Object.fromEntries(
      appRoutes.map(r => [
        r.path,
        (r.element && typeof r.element === 'object' && 'type' in r.element)
          ? (r.element as React.ReactElement).type
          : undefined
      ])
    );
    expect(routeMap['/']).toBe(Dashboard);
    expect(routeMap['/personas']).toBe(personas.PersonasList);
    expect(routeMap['/personas/create']).toBe(personas.PersonasCreate);
    expect(routeMap['/personas/edit/:id']).toBe(personas.PersonasEdit);
    expect(routeMap['/personas/:id']).toBe(personas.PersonasView);
    expect(routeMap['/goals']).toBe(goals.GoalsList);
    expect(routeMap['/goals/create']).toBe(goals.GoalsCreate);
    expect(routeMap['/goals/edit/:id']).toBe(goals.GoalsEdit);
    expect(routeMap['/goals/:id']).toBe(goals.GoalsView);
    expect(routeMap['/metrics']).toBe(metrics.MetricsList);
    expect(routeMap['/metrics/create']).toBe(metrics.MetricsCreate);
    expect(routeMap['/metrics/edit/:id']).toBe(metrics.MetricsEdit);
    expect(routeMap['/metrics/:id']).toBe(metrics.MetricsView);
    expect(routeMap['/evaluators']).toBe(evaluators.EvaluatorsList);
    expect(routeMap['/evaluators/create']).toBe(evaluators.EvaluatorsCreate);
    expect(routeMap['/evaluators/edit/:id']).toBe(evaluators.EvaluatorsEdit);
    expect(routeMap['/evaluators/:id']).toBe(evaluators.EvaluatorsView);
    expect(routeMap['/conversations']).toBe(conversations.ConversationsList);
    expect(routeMap['/conversations/generate']).toBe(conversations.ConversationsGenerate);
    expect(routeMap['/conversations/upload']).toBe(conversations.ConversationsUpload);
    expect(routeMap['/conversations/:id']).toBe(conversations.ConversationsDetails);
    expect(routeMap['/annotations']).toBe(annotations.AnnotationsList);
    expect(routeMap['/annotations/start']).toBe(annotations.AnnotationsStart);
    expect(routeMap['/annotations/create']).toBe(annotations.AnnotationsCreate);
  });
});