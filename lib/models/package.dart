import 'package:freezed_annotation/freezed_annotation.dart';
part 'package.freezed.dart';

@freezed
class Package with _$Package {
  const factory Package({
    required String id,
    required String name,
  }) = _Package;
}
