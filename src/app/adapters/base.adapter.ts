export interface BaseAdapter<M, N> {
  transform(item: M): N;
}


