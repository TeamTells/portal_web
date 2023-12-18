export abstract class Store<TState, TExecutor extends Executor<TState, TAction, TResultAction>, TAction, TResultAction> {

  public state!: TState

  protected constructor(
    public initState: TState,
    private executor: TExecutor,
    reducer: Reducer<TState, TResultAction>
  ) {
    this.state = initState
    executor.init(reducer, (): TState => this.state, (state) => {
      this.state = state
    })
  }


  performAction(action: TAction): void {
    this.executor.execute(action)
  }

}

export abstract class Executor<TState, TAction, TResultAction> {

  protected getState!: () => TState
  private onReduced!: (state: TState) => void
  private reducer!: Reducer<TState, TResultAction>

  init(
    reducer: Reducer<TState, TResultAction>,
    getState: () => TState,
    onReduced: (state: TState) => void
  ) {
    this.reducer = reducer
    this.getState = getState
    this.onReduced = onReduced
  }

  abstract execute(action: TAction): void

  protected reduce(result: TResultAction) {
    this.onReduced(this.reducer.reduce(this.getState(), result))
  }

}

export interface Reducer<TState, TResultAction> {

  reduce(state: TState, action: TResultAction): TState

}


